import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { alertService, AlertType } from "../services/alert.service";
import { XIcon } from "@heroicons/react/outline";

export { Alert };

Alert.propTypes = {
  id: PropTypes.string,
  fade: PropTypes.bool,
};

Alert.defaultProps = {
  id: "default-alert",
  fade: true,
};

function Alert({ id, fade }) {
  const mounted = useRef(false);
  const router = useRouter();
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    mounted.current = true;

    const subscription = alertService.onAlert(id).subscribe((alert) => {
      if (!alert.message) {
        setAlerts((alerts) => {
          return omit(alerts, "keepAfterRouteChange");
        });
      } else {
        alert.itemId = Math.random();
        if (alerts.length) removeAlert(alerts[0]);
        setAlerts([alert]);
        setTimeout(() => updateAlert(alert), 100);
        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 3000);
        }
      }
    });

    const clearAlerts = () => alertService.clear(id);
    router.events.on("routeChangeStart", clearAlerts);

    return () => {
      mounted.current = false;

      subscription.unsubscribe();
      router.events.off("routeChangeStart", clearAlerts);
    };
  }, []);

  function omit(arr, key) {
    return arr.map((obj) => {
      const { [key]: omitted, ...rest } = obj;
      return rest;
    });
  }

  function updateAlert(alert) {
    if (!mounted.current) return;

    setAlerts((alerts) =>
      alerts.map((x) => (x.itemId === alert.itemId ? { ...x, new: true } : x))
    );
  }

  function removeAlert(alert) {
    if (!mounted.current) return;

    setAlerts((alerts) =>
      alerts.map((x) => (x.itemId === alert.itemId ? { ...x, fade: true } : x))
    );

    setTimeout(() => {
      setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
    }, 500);
  }

  function cssClasses(alert) {
    if (!alert) return;

    const classes = [
      "flex relative top-0 transform justify-between gap-5 rounded-lg p-5 text-white transition-all duration-500",
    ];

    const alertTypeClass = {
      [AlertType.Success]: "bg-green-500",
      [AlertType.Error]: "bg-red-500",
      [AlertType.Info]: "bg-blue-500",
      [AlertType.Warning]: "bg-yellow-500",
    };

    if (alert.fade) {
      classes.push("-translate-y-28");
    }

    if (!alert.new) {
      classes.push("-top-28");
    }

    classes.push(alertTypeClass[alert.type]);

    return classes.join(" ");
  }

  if (!alerts.length) return null;

  return (
    <div className="fixed top-5 flex flex-col gap-5 w-full z-50 max-w-xs sm:max-w-md">
      {alerts.map((alert, index) => (
        <div key={index} className={cssClasses(alert)}>
          <span
            className="my-auto"
            dangerouslySetInnerHTML={{ __html: alert.message }}
          ></span>
          <div className="w-1/6 my-auto flex  justify-end">
            <XIcon
              className="w-6 cursor-pointer my-auto"
              onClick={() => removeAlert(alert)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

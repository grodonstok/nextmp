import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ title, items, change }) {
  const [selected, setSelected] = useState(null);

  const onChange = (s) => {
    setSelected(s);
    change(s);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-start w-full rounded-md shadow-sm focus:outline-none font-bold text-lg whitespace-nowrap">
          {selected ? selected : title}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-6 w-6 my-auto"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#2A3A5F] ring-2 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((i, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <div
                    onClick={() => onChange(i)}
                    className={classNames(
                      active ? " text-[#00FAE3]" : "",
                      "block px-4 py-2 text-sm uppercase cursor-pointer transition-all"
                    )}
                  >
                    {i}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

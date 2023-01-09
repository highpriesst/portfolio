import React from "react";

import { InferProps } from "prop-types";
import PropTypes from "prop-types";

function WorksComponent({
  year,
  title,
  desc,
  tech,
}: InferProps<typeof WorksComponent.propTypes>) {
  return (
    <div className=" flex m-1 p-2 w-min justify-center border">
      <div className=" p-2 pr-5">
        <h1>{year}</h1>
      </div>
      <div className=" p-2 flex flex-col">
        <div className="text-white mb-5">
          <h1 className="">{title}</h1>
        </div>
        <div className="text-gray-400 mb-5">{desc}</div>
        <div className="flex">
          {tech?.map((t, i) => (
            <p key={i} className="pr-2 text-gray-600">
              <span>{t} • </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

WorksComponent.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string),
};

export default WorksComponent;

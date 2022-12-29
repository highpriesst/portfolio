import { InferProps, string } from "prop-types";
import PropTypes from "prop-types";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function SingleLink({
  name,
  link,
  nickname,
}: InferProps<typeof SingleLink.propTypes>) {
  return (
    <div className="flex flex-col [&>*]:mb-2">
      <span className="text-gray-800 dark:text-gray-500">{name}</span>
      <div className="flex items-center gap-1 group transition duration-300">
        <a className="font-medium dark:font-normal" href={link}>
          @{nickname}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-300"></span>
        </a>
        <ArrowUpRightIcon className="h-3 w-3 ml-1" />
      </div>
    </div>
  );
}

SingleLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default SingleLink;

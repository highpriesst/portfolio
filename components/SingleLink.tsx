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
      <div className="flex items-center gap-1">
        <a className="font-medium dark:font-normal" href={link}>
          @{nickname}
        </a>
        <ArrowUpRightIcon className="h-4 w-4" />
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

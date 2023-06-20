import { InferProps } from "prop-types";
import PropTypes from "prop-types";
import { useTheme } from "next-themes";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

function SingleLink({
  name,
  link,
  nickname,
}: InferProps<typeof SingleLink.propTypes>) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-row [&>*]:mb-2 gap-3">
      <span className="text-[#4c566a]">{name}</span>
      <div className="flex items-center gap-1 group transition duration-300">
        <Link
          className="font-medium dark:font-normal text-[#8fbcbb]"
          href={link}>
          @{nickname}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-300"></span>
        </Link>
        <p className="text-white dark:text-white">
          <ArrowUpRightIcon className={`h-3 w-3 ml-1`} />
        </p>
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

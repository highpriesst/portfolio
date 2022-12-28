import { InferProps, string } from "prop-types";
import PropTypes from "prop-types";

function SingleLink({
  name,
  link,
  nickname,
}: InferProps<typeof SingleLink.propTypes>) {
  return (
    <div className="p-2 flex flex-col [&>*]:mb-1">
      <span className="text-gray-500">{name}</span>
      <a href={link}>@{nickname}</a>
    </div>
  );
}

SingleLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default SingleLink;

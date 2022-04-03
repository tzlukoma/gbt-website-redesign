import React from 'react';
import { Link } from 'gatsby';

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;
  console.log({ previousPagePath });
  console.log({ nextPagePath });

  //   console.log(pageContext);
  return (
    <div className="flex justify-center">
      <div>
        {previousPagePath && (
          <span className="m-5">
            <Link
              to={previousPagePath}
              className="h-20 text-2xl underline text-primary-500"
            >
              {`< Previous`}
            </Link>
          </span>
        )}
        {nextPagePath && (
          <span className="m-5">
            <Link
              to={nextPagePath}
              className="h-20 text-2xl underline text-primary-500"
            >
              {`Next >`}
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Pager;

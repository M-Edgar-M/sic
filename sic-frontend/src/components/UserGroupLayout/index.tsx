import basicAva from "../../img/avatar.jpg";
export default function UserGroupLayout() {
  return (
    <section className="mr-3">
      <div className="flex items-center space-x-4 m-2">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src={basicAva}
            alt="Profile"
          />
        </div>
        <div className="flex-1 m-2">
          <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
            User Group
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4 m-2">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src={basicAva}
            alt="Profile"
          />
        </div>
        <div className="flex-1 m-2">
          <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
            User Group
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4 m-2">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src={basicAva}
            alt="Profile"
          />
        </div>
        <div className="flex-1 m-2">
          <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
            User Group
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4 m-2">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src={basicAva}
            alt="Profile"
          />
        </div>
        <div className="flex-1 m-2">
          <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
            User Group
          </p>
        </div>
      </div>
      
    </section>
  );
}

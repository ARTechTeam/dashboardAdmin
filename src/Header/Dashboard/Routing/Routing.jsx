import { navigatorLinks } from '../../../data/data';

export default function Routing() {
  return (
    <div className="px-5 mt-8">
      <ul className="overflow-y-scroll h-full custom-scrollbar">
        {navigatorLinks.map((firstItem) => (
          <li key={firstItem.head}>
            <p className="text-xl font-primary-bold text-Secondary-light">{firstItem.head}</p>
            <div className="h-px w-full bg-light-border dark:bg-dark-border"></div>
            <ul className="my-3">
              {firstItem.topic.map((secItem) => (
                <button
                  className="hover:bg-Primary my-2 rounded-lg w-full text-start hover:text-white px-5 py-1"
                  key={secItem.subTopic}
                >
                  <li>
                    <p>{secItem.subTopic}</p>
                  </li>
                </button>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

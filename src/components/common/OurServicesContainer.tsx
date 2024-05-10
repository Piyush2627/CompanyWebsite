import { CardTab, TabSwitcher, TabContent } from "./OurServicesCard";

export default function OurServicesContainer() {
  return (
    <div className="container m-auto px-5 text-white lg:px-24">
      <div className="rounded-xl border border-gray-500 bg-gray-900 p-5 shadow-md">
        <CardTab>
          <div>
            <TabSwitcher tabId={1}>
              <div className="p-2 text-lg ">UI / UX Design</div>
            </TabSwitcher>
            <TabSwitcher tabId={2}>
              <div className="p-2 text-lg">Tab 2</div>
            </TabSwitcher>
          </div>
          <div className="p-2">
            <TabContent id={1}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, placeat tempore nihil temporibus velit, quidem voluptas
              animi tempora, quam atque assumenda fugiat minima saepe laborum
              sequi iure fugit explicabo? Doloribus?
            </TabContent>

            <TabContent id={2}>Tab content 2</TabContent>
          </div>
        </CardTab>
      </div>
    </div>
  );
}

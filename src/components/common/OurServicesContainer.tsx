import { CardTab, TabSwitcher, TabContent } from "./OurServicesCard";

export default function OurServicesContainer() {
  return (
    <div className="container m-auto px-5 text-white shadow-lg lg:px-24">
      <div className="rounded-xl border  border-cinder-500 p-5">
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

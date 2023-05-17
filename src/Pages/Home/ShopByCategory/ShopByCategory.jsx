import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
    return (
        <div className="text-center w-[80%] mx-auto my-20">
            <div className="text-center my-10">
                <h2 className="text-5xl font-bold">Shop By Category</h2>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Avengers</Tab>
                    <Tab>DC</Tab>
                    <Tab>Transformer</Tab>
                </TabList>

                <TabPanel>
                    <h2>Thor is Here</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Black Adam Is Here</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Transformer is Here</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
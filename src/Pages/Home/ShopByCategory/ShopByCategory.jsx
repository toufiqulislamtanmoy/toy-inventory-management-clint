import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SubCatagoryDataCard from "../../SubCatagoryDataCard/SubCatagoryDataCard";

const ShopByCategory = () => {
    const [selectTab, setSelectTab] = useState("Avenger");
    const [subCtgData, setSubCtgData] = useState([]);

    const selectAvenger = () => {
        setSelectTab("Avenger");
        console.log("Avenger");
    };

    const selectDC = () => {
        setSelectTab("DC");
        console.log("DC");
    };

    const selectTS = () => {
        setSelectTab("Transformer");
        console.log("Transformer");
    };

    const url = `http://localhost:5000/toys/?subCtg=${selectTab}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSubCtgData(data);
            });
    }, [selectTab]);

    return (
        <div className="w-full lg:w-[80%] mx-auto">
            <div className="text-center my-10">
                <h2 className="text-5xl font-bold">Shop By Category</h2>
            </div>
            <Tabs>
                <TabList>
                    <Tab onClick={selectAvenger}>Avengers</Tab>
                    <Tab onClick={selectDC}>DC</Tab>
                    <Tab onClick={selectTS}>Transformer</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
                        {subCtgData.map(singleData => (
                            <SubCatagoryDataCard
                                key={singleData._id}
                                singleData={singleData}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
                        {subCtgData.map(singleData => (
                            <SubCatagoryDataCard
                                key={singleData._id}
                                singleData={singleData}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-0 lg:m-10">
                        {subCtgData.map(singleData => (
                            <SubCatagoryDataCard
                                key={singleData._id}
                                singleData={singleData}
                            />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ShopByCategory;

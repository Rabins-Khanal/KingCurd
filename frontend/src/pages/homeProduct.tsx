import { useState, useEffect } from "react";
import "./productStyle.css";
import MenuCard from "./productCard.tsx";
import Navbar from "./productNavbar.tsx";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface MenuItem {
    category: {
        name: string;
    };
}

const HomeProduct: React.FC = () => {

    const { data: Menu2 } = useQuery({
        queryKey: ["GET_ITEM_DATA"],
        queryFn() {
            return axios.get<MenuItem[]>("http://localhost:8080/product/findAll");
        },
    });

    const [menuData, setMenuData] = useState<MenuItem[]>([]);
    const [menuList, setMenuList] = useState<string[]>([]);

    useEffect(() => {
        if (Menu2?.data) {
            setMenuData(Menu2.data);

            const uniqueCategories = [
                ...new Set(
                    Menu2.data.map((curElem) => curElem?.category?.name || "Uncategorized")
                ),
                "All",
            ];
            setMenuList(uniqueCategories);
        }
    }, [Menu2?.data]);

    const filterItem = (category: string) => {
        if (category === "All") {
            setMenuData(Menu2?.data || []);
            return;
        }

        const updatedList = Menu2?.data?.filter((curElem) => {
            return curElem?.category?.name === category;
        }) || [];

        setMenuData(updatedList);
    };

    



    return (
        <>
            <div>
                <Header/>
                <section className={"product-background-image"}>
                <div className={"check-out-container"}>
                <h2>Check out our</h2>
                        <h1>Products</h1>
                        
                   
                </div>
                </section>
                

                <div className={"menu-contents-sidebar"}>
                    <Navbar filterItem={filterItem} menuList={menuList} />
                    <MenuCard menuData={menuData} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default HomeProduct;
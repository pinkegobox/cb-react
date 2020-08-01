import React from "react";
import ecommerce from "./assets/ecommerce.png";

const Main = () => {
    return (
        <main>
            <h2>
                Generate new revenue, profits, and establish an effective
                omni-channelbusiness.
            </h2>
            <h2>Over 53,720 furniture SKUs published.</h2>
            <img src={ecommerce} alt="" />
            <h2>Designed to drive sales and automate operations.</h2>
            <ul>
                <li>
                    <h3>Multi Channel Publishing</h3>
                    <p>Fully built-out product data and content deployed to all channels</p>
                </li>
                <li>
                    <h3>Automated Promotions</h3>
                    <p>Full setup and optimization of unpaid promotions across all channels</p>
                </li>
                <li>
                    <h3>Channel Setup</h3>
                    <p>Channel Setup</p>
                </li>
                <li>
                    <h3>Inventory App</h3>
                    <p>Automated multi-marketplace inventory management</p>
                </li>
                <li>
                    <h3>Support Plus</h3>
                    <p>Troubleshooting, insight, and best practices to help you scale</p>
                </li>
            </ul>
            <hr/>
            <h2>From start to scale, say hello to your next chapter of growth.</h2>
            <a href="/">Talk to us to learn more</a>
        </main>
    );
};

export default Main;

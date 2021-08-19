(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{258:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return r})),t.d(e,"rightToc",(function(){return c})),t.d(e,"default",(function(){return p}));var a=t(2),i=t(6),o=(t(0),t(295)),s={id:"dev-rentonzilliqa-modals",title:"Modals",keywords:["react","rentonzilliqa","modals","frontend"],description:"Creating the Modals for the RentOnZilliqa frontend application"},r={id:"dev/dev-rentonzilliqa-modals",isDocsHomePage:!1,title:"Modals",description:"Creating the Modals for the RentOnZilliqa frontend application",source:"@site/docs/dev/dev-rentonzilliqa-modals.md",permalink:"/docs/dev/dev-rentonzilliqa-modals",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-rentonzilliqa-modals.md",sidebar:"DevelopersSidebar",previous:{title:"Scripting",permalink:"/docs/dev/dev-rentonzilliqa-scripting"},next:{title:"Pages",permalink:"/docs/dev/dev-rentonzilliqa-pages"}},c=[{value:"Create Account Modal",id:"create-account-modal",children:[]},{value:"Create Listing Modal",id:"create-listing-modal",children:[]},{value:"Manage Listing Modal",id:"manage-listing-modal",children:[]}],l={rightToc:c};function p(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"In this section, we will create the Modals for the frontend application. We use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#modal"}),Object(o.b)("inlineCode",{parentName:"a"},"Modal"))," component that we created earlier."),Object(o.b)("h2",{id:"create-account-modal"},"Create Account Modal"),Object(o.b)("p",null,"We start with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-frontend#account-creation-and-zilpay"}),"Create Account Modal")," that will be used to connect to the ZilPay wallet as well as access the smart contract."),Object(o.b)("p",null,"It uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#input"}),Object(o.b)("inlineCode",{parentName:"a"},"Input"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#button"}),Object(o.b)("inlineCode",{parentName:"a"},"Button"))," components.\nIt uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#checkbox"}),Object(o.b)("inlineCode",{parentName:"a"},"CheckBox"))," for selecting the user role. A button is presented for connecting ZilPay when required."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#createaccounttransition"}),Object(o.b)("inlineCode",{parentName:"a"},"createAccountTransition"))," function is used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useEffect, useState } from "react";\nimport ContextContainer from "../functions/contextContainer";\nimport createUserTransition from "../functions/createUserTransition";\nimport Button from "./componentButton";\nimport Input from "./componentInput";\nimport Modal from "./componentModal";\nimport Tick from "./componentTick";\n\ntype props = {\n    showSignUp: boolean;\n    setShowSignUp(visible: boolean): void;\n};\n\nconst CreateAccountModal: React.FC<props> = (props) => {\n    const { showSignUp, setShowSignUp } = props;\n    const [name, setName] = useState<string | undefined>(undefined);\n    const [userRole, setUserRole] = useState<string | undefined>("host");\n    const { zilPay, contract } = ContextContainer.useContainer();\n\n    const createUser = async () => {\n        const role = userRole === "host" ? "1" : "0";\n        createUserTransition(contract, zilPay, name, role);\n    };\n\n    const connectZilPay = async () => {\n        await zilPay.wallet.connect();\n        window.location.reload();\n    };\n\n    useEffect(() => {\n        setName(undefined);\n        setUserRole("host");\n    }, [setShowSignUp]);\n\n    return (\n        <Modal\n            title="Create Account"\n            visible={showSignUp}\n            setVisible={setShowSignUp}\n            buttonText={"Create Account"}\n            onClick={createUser}\n        >\n            <>\n                {!zilPay.wallet.isConnect && (\n                    <>\n                        <h4 className="text-xs font-semibold text-gray-500 tracking-wide uppercase py-4">\n                            ZilPay\n                        </h4>\n                        <Button\n                            text={"Connect ZilPay"}\n                            padding\n                            onClick={connectZilPay}\n                            modal\n                        />\n                    </>\n                )}\n                <Input name="Your name" value={name} setValue={setName} />\n                <h4 className="text-xs font-semibold text-gray-500 tracking-wide uppercase py-4">\n                    Please select one\n                </h4>\n                <div className="flex gap-12 mb-8">\n                    <div\n                        className="flex justify-center items-center cursor-pointer"\n                        onClick={() => setUserRole("host")}\n                    >\n                        <p className="text-lg text-gray-800 pr-4">Host</p>\n                        <div\n                            className={`p-1 bg-gray-200 rounded-lg w-8 h-8 hover:scale-95 transform transition-all ${\n                                userRole === "host" ? "" : "hover:bg-gray-300"\n                            }`}\n                        >\n                            <div\n                                className={`w-full h-full rounded transition-colors text-transparent ${\n                                    userRole === "host"\n                                        ? "bg-gray-900 text-gray-200"\n                                        : ""\n                                }`}\n                            >\n                                {userRole === "host" && <Tick />}\n                            </div>\n                        </div>\n                    </div>\n                    <div\n                        className="flex justify-center items-center cursor-pointer"\n                        onClick={() => setUserRole("renter")}\n                    >\n                        <p className="text-lg text-gray-800 pr-4">Rent</p>\n                        <div\n                            className={`p-1 bg-gray-200 rounded-lg w-8 h-8 hover:scale-95 transform transition-all ${\n                                userRole !== "host" ? "" : "hover:bg-gray-300"\n                            }`}\n                        >\n                            <div\n                                className={`w-full h-full rounded transition-colors text-transparent ${\n                                    userRole !== "host"\n                                        ? "bg-gray-900 text-gray-200"\n                                        : ""\n                                }`}\n                            >\n                                {userRole !== "host" && <Tick />}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </>\n        </Modal>\n    );\n};\n\nexport default CreateAccountModal;\n')),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Quinence/zilliqa-fullstack-app/blob/main/src/components/componentCreateAccountModal.tsx"}),Object(o.b)("inlineCode",{parentName:"a"},"/src/components/componentCreateAccountModal.tsx"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"create-listing-modal"},"Create Listing Modal"),Object(o.b)("p",null,"We now get to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-frontend#creating-and-managing-listings"}),"Create Listing Modal")," that will be used by host users to post new listings."),Object(o.b)("p",null,"It uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#input"}),Object(o.b)("inlineCode",{parentName:"a"},"Input"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#button"}),Object(o.b)("inlineCode",{parentName:"a"},"Button"))," components.\nIt uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#amenitiesinput"}),Object(o.b)("inlineCode",{parentName:"a"},"AmenitiesInput"))," for selecting the available amenities. A button is presented for connecting ZilPay when required."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#createlistingtransition"}),Object(o.b)("inlineCode",{parentName:"a"},"createListingTransition"))," function is used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useEffect, useState } from "react";\nimport ContextContainer from "../functions/contextContainer";\nimport createListingTransition from "../functions/createListingTransition";\nimport AmenitiesInput from "./componentAmenitiesInput";\nimport Input from "./componentInput";\nimport Modal from "./componentModal";\n\ntype props = {\n    showCreateListing: boolean;\n    setShowCreateListing(visible: boolean): void;\n};\n\nconst CreateListingModal: React.FC<props> = (props) => {\n    const { showCreateListing, setShowCreateListing } = props;\n\n    const [name, setName] = useState<string | undefined>(undefined);\n    const [description, setDescription] =\n        useState<string | undefined>(undefined);\n    const [price, setPrice] = useState<string | undefined>(undefined);\n    const [rooms, setRooms] = useState<string | undefined>(undefined);\n    const [bathrooms, setBathrooms] = useState<string | undefined>(undefined);\n    const [location, setLocation] = useState<string | undefined>(undefined);\n    const [image, setImage] = useState<string | undefined>(undefined);\n\n    const [wifi, setWifi] = useState<boolean>(false);\n    const [kitchen, setKitchen] = useState<boolean>(false);\n    const [tv, setTv] = useState<boolean>(false);\n    const [laundry, setLaundry] = useState<boolean>(false);\n    const [hvac, setHvac] = useState<boolean>(false);\n\n    const { contract, zilPay } = ContextContainer.useContainer();\n\n    const createListing = () => {\n        if (\n            !name ||\n            !description ||\n            !price ||\n            !rooms ||\n            !bathrooms ||\n            !location ||\n            !image\n        )\n            return;\n        createListingTransition(\n            contract,\n            zilPay,\n            name,\n            description,\n            price,\n            rooms,\n            bathrooms,\n            image,\n            location,\n            wifi,\n            kitchen,\n            tv,\n            laundry,\n            hvac\n        );\n    };\n\n    useEffect(() => {\n        setName(undefined);\n        setDescription(undefined);\n        setPrice(undefined);\n        setRooms(undefined);\n        setBathrooms(undefined);\n        setLocation(undefined);\n        setImage(undefined);\n        setWifi(false);\n        setKitchen(false);\n        setTv(false);\n        setLaundry(false);\n        setHvac(false);\n    }, [showCreateListing]);\n\n    return (\n        <Modal\n            title="Create Listing"\n            visible={showCreateListing}\n            setVisible={setShowCreateListing}\n            buttonText={"Create"}\n            onClick={createListing}\n        >\n            <Input name="Name" value={name} setValue={setName} />\n            <Input\n                name="Description"\n                value={description}\n                setValue={setDescription}\n            />\n            <Input\n                name="Rooms"\n                value={rooms}\n                type="number"\n                setValue={setRooms}\n            />\n            <Input\n                name="Bathrooms"\n                value={bathrooms}\n                type="number"\n                setValue={setBathrooms}\n            />\n            <Input\n                name="Price (ZIL)"\n                unit="per night"\n                value={price}\n                type="number"\n                setValue={setPrice}\n            />\n            <Input\n                name="Image URL"\n                value={image}\n                type="text"\n                setValue={setImage}\n            />\n            <Input\n                name="Google Maps Plus Code"\n                value={location}\n                type="text"\n                setValue={setLocation}\n            />\n            <AmenitiesInput\n                {...{\n                    wifi,\n                    setWifi,\n                    kitchen,\n                    setKitchen,\n                    tv,\n                    setTv,\n                    laundry,\n                    setLaundry,\n                    hvac,\n                    setHvac,\n                }}\n            />\n        </Modal>\n    );\n};\n\nexport default CreateListingModal;\n')),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Quinence/zilliqa-fullstack-app/blob/main/src/components/componentCreateListingModal.tsx"}),Object(o.b)("inlineCode",{parentName:"a"},"/src/components/componentCreateListingModal.tsx"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"manage-listing-modal"},"Manage Listing Modal"),Object(o.b)("p",null,"We now get to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-frontend#creating-and-managing-listings"}),"Create Listing Modal")," that will be used by host users to post new listings."),Object(o.b)("p",null,"It uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#input"}),Object(o.b)("inlineCode",{parentName:"a"},"Input"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#button"}),Object(o.b)("inlineCode",{parentName:"a"},"Button"))," components.\nIt uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"dev-rentonzilliqa-components/#amenitiesinput"}),Object(o.b)("inlineCode",{parentName:"a"},"AmenitiesInput"))," for selecting the available amenities. A button is presented for connecting ZilPay when required."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#createlistingtransition"}),Object(o.b)("inlineCode",{parentName:"a"},"deleteListingTransition")),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#updatelistingtransition"}),Object(o.b)("inlineCode",{parentName:"a"},"updateListingTransition")),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#claimrenttransition"}),Object(o.b)("inlineCode",{parentName:"a"},"claimRentTransition"))," functions are called as required."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useEffect, useState } from "react";\nimport claimRentTransition from "../functions/claimRentTransition";\nimport ContextContainer from "../functions/contextContainer";\nimport deleteListingTransition from "../functions/deleteListingTransition";\nimport updateListingTransition from "../functions/updateListingTransition";\nimport AmenitiesInput from "./componentAmenitiesInput";\nimport Button from "./componentButton";\nimport Input from "./componentInput";\nimport Modal from "./componentModal";\n\ntype props = {\n    modalListing: any;\n    showManageListing: boolean;\n    setShowManageListing(visible: boolean): void;\n};\n\nconst ManageListingModal: React.FC<props> = (props) => {\n    const { showManageListing, setShowManageListing, modalListing } = props;\n    const { id, accumulated_rent } = modalListing;\n\n    const [name, setName] = useState<string | undefined>(undefined);\n    const [description, setDescription] =\n        useState<string | undefined>(undefined);\n    const [price, setPrice] = useState<string | undefined>(undefined);\n    const [rooms, setRooms] = useState<string | undefined>(undefined);\n    const [bathrooms, setBathrooms] = useState<string | undefined>(undefined);\n    const [location, setLocation] = useState<string | undefined>(undefined);\n    const [image, setImage] = useState<string | undefined>(undefined);\n\n    const [wifi, setWifi] = useState<boolean>(false);\n    const [kitchen, setKitchen] = useState<boolean>(false);\n    const [tv, setTv] = useState<boolean>(false);\n    const [laundry, setLaundry] = useState<boolean>(false);\n    const [hvac, setHvac] = useState<boolean>(false);\n\n    const { contract, zilPay } = ContextContainer.useContainer();\n\n    const updateListing = () => {\n        if (\n            !name ||\n            !description ||\n            !price ||\n            !rooms ||\n            !bathrooms ||\n            !location ||\n            !image\n        )\n            return;\n        updateListingTransition(\n            contract,\n            zilPay,\n            id,\n            name,\n            description,\n            price,\n            rooms,\n            bathrooms,\n            image,\n            location,\n            wifi,\n            kitchen,\n            tv,\n            laundry,\n            hvac\n        );\n    };\n\n    const claimRent = () => {\n        claimRentTransition(contract, zilPay, id);\n        setShowManageListing(false);\n    };\n\n    const deleteListing = () => {\n        deleteListingTransition(contract, zilPay, id);\n        setShowManageListing(false);\n    };\n\n    useEffect(() => {\n        setName(modalListing.name);\n        setDescription(modalListing.description);\n        setPrice(modalListing.price);\n        setRooms(modalListing.rooms);\n        setBathrooms(modalListing.bathrooms);\n        setLocation(modalListing.location);\n        setImage(modalListing.image);\n        setWifi(modalListing.amenities.wifi);\n        setKitchen(modalListing.amenities.kitchen);\n        setTv(modalListing.amenities.tv);\n        setLaundry(modalListing.amenities.laundry);\n        setHvac(modalListing.amenities.hvac);\n    }, [showManageListing]);\n\n    return (\n        <Modal\n            title="Manage Listing"\n            visible={showManageListing}\n            setVisible={setShowManageListing}\n            buttonText={"Update Listing"}\n            onClick={updateListing}\n        >\n            <>\n                <h4 className="text-sm font-semibold text-gray-500 tracking-wide uppercase py-4">\n                    Accumulated Rent\n                </h4>\n                <div className="flex justify-between items-center pb-8">\n                    <p className="text-2xl ">{accumulated_rent}</p>\n                    <Button text={"Claim Rent"} onClick={claimRent} />\n                </div>\n            </>\n            <>\n                <h4 className="text-sm font-semibold text-gray-500 tracking-wide uppercase py-4">\n                    Delete Listing\n                </h4>\n                <Button\n                    text={"Delete Listing"}\n                    onClick={deleteListing}\n                    alert\n                    padding\n                    modal\n                />\n            </>\n            <Input name="Name" value={name} setValue={setName} />\n            <Input\n                name="Description"\n                value={description}\n                setValue={setDescription}\n            />\n            <Input\n                name="Rooms"\n                value={rooms}\n                type="number"\n                setValue={setRooms}\n            />\n            <Input\n                name="Bathrooms"\n                value={bathrooms}\n                type="number"\n                setValue={setBathrooms}\n            />\n            <Input\n                name="Price (ZIL)"\n                unit="per night"\n                value={price}\n                type="number"\n                setValue={setPrice}\n            />\n            <Input\n                name="Image URL"\n                value={image}\n                type="text"\n                setValue={setImage}\n            />\n            <Input\n                name="Google Maps Plus Code"\n                value={location}\n                type="text"\n                setValue={setLocation}\n            />\n            <AmenitiesInput\n                {...{\n                    wifi,\n                    setWifi,\n                    kitchen,\n                    setKitchen,\n                    tv,\n                    setTv,\n                    laundry,\n                    setLaundry,\n                    hvac,\n                    setHvac,\n                }}\n            />\n        </Modal>\n    );\n};\n\nexport default ManageListingModal;\n')),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Quinence/zilliqa-fullstack-app/blob/main/src/components/componentManageListingModal.tsx"}),Object(o.b)("inlineCode",{parentName:"a"},"/src/components/componentManageListingModal.tsx"))))}p.isMDXComponent=!0},295:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return b}));var a=t(0),i=t.n(a);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=i.a.createContext({}),p=function(n){var e=i.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=p(n.components);return i.a.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},m=i.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),u=p(t),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?i.a.createElement(b,r(r({ref:e},l),{},{components:t})):i.a.createElement(b,r({ref:e},l))}));function b(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,s=new Array(o);s[0]=m;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=n,r.mdxType="string"==typeof n?n:a,s[1]=r;for(var l=2;l<o;l++)s[l]=t[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
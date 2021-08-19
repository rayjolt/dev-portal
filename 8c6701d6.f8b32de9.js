(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{214:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(2),a=t(6),r=(t(0),t(295)),o={id:"dev-rentonzilliqa-pages",title:"Pages",keywords:["react","rentonzilliqa","pages","frontend"],description:"Building the Pages for the RentOnZilliqa frontend application"},s={id:"dev/dev-rentonzilliqa-pages",isDocsHomePage:!1,title:"Pages",description:"Building the Pages for the RentOnZilliqa frontend application",source:"@site/docs/dev/dev-rentonzilliqa-pages.md",permalink:"/docs/dev/dev-rentonzilliqa-pages",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-rentonzilliqa-pages.md",sidebar:"DevelopersSidebar",previous:{title:"Modals",permalink:"/docs/dev/dev-rentonzilliqa-modals"}},c=[{value:"App Component",id:"app-component",children:[]},{value:"<code>index.tsx</code>",id:"indextsx",children:[]},{value:"Listings Page",id:"listings-page",children:[]},{value:"Individual Listing Page",id:"individual-listing-page",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("p",null,"In this section, we will build the pages for the frontend application."),Object(r.b)("h2",{id:"app-component"},"App Component"),Object(r.b)("p",null,"We start with the ",Object(r.b)("inlineCode",{parentName:"p"},"App")," component."),Object(r.b)("p",null,"We create the routes for our pages using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-router-dom"}),Object(r.b)("inlineCode",{parentName:"a"},"react-router-dom")),"."),Object(r.b)("p",null,"We setup the ",Object(r.b)("inlineCode",{parentName:"p"},"Toaster")," from ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://react-hot-toast.com"}),Object(r.b)("inlineCode",{parentName:"a"},"react-hot-toast")),"."),Object(r.b)("p",null,"With the ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," hook, we set up the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We check if ZilPay is available on the browser and store it in context using ",Object(r.b)("inlineCode",{parentName:"li"},"setZilPay"),". If ZilPay is not available, an error is conveyed."),Object(r.b)("li",{parentName:"ul"},"We fetch the state of the contract and store it in context using ",Object(r.b)("inlineCode",{parentName:"li"},"setContract")),Object(r.b)("li",{parentName:"ul"},"Subscriptions are set up which allow us to",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Update the contract state and block number when there is a block update using ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://zilpay.github.io/zilpay-docs/zilliqa-provider/#methods"}),Object(r.b)("inlineCode",{parentName:"a"},"zilPay.wallet.observableBlock"))),Object(r.b)("li",{parentName:"ul"},"Update the ZilPay account when it is changed using ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://zilpay.github.io/zilpay-docs/zilliqa-provider/#methods"}),Object(r.b)("inlineCode",{parentName:"a"},"zilPay.wallet.observableAccount")))))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useEffect, useState } from "react";\nimport Header from "./components/componentHeader";\nimport Listing from "./components/componentListing";\nimport Listings from "./components/componentListings";\nimport CreateAccountModal from "./components/componentCreateAccountModal";\nimport ContextContainer from "./functions/contextContainer";\nimport { Toaster } from "react-hot-toast";\nimport {\n    BrowserRouter as Router,\n    Switch,\n    Route,\n    Redirect,\n} from "react-router-dom";\n\nconst App: React.FC = () => {\n    const [showSignUp, setShowSignUp] = useState<boolean>(false);\n    const [zilPayCheck, setZilPayCheck] = useState<number>(0);\n    const {\n        zilPay,\n        setZilPay,\n        error,\n        setError,\n        setContract,\n        setContractState,\n        setCurrentBlockNumber,\n    } = ContextContainer.useContainer();\n\n    const getContractState = async () => {\n        const contract = await zilPay.contracts.at(\n            process.env.REACT_APP_SMART_CONTRACT_ADDRESS\n        );\n        setContract(contract);\n        const contractState = await contract.getState();\n        setContractState(contractState);\n    };\n\n    useEffect(() => {\n        if (error === false) return;\n        // @ts-ignore\n        const zilPay = window.zilPay;\n        if (zilPay === undefined) {\n            setError(true);\n            return;\n        }\n        setZilPay(zilPay);\n        setError(false);\n    }, [error]);\n\n    useEffect(() => {\n        if (error && zilPayCheck < 100) {\n            setZilPayCheck(zilPayCheck + 1);\n            setError(undefined);\n            return;\n        }\n        if (error !== false) return;\n\n        let block: any = undefined;\n        let account: any = undefined;\n\n        if (!zilPay.wallet.isConnect) return;\n        try {\n            block = zilPay.wallet.observableBlock().subscribe((block: any) => {\n                const blockNumber = parseInt(block.TxBlock.header.BlockNum);\n                setCurrentBlockNumber(blockNumber);\n                getContractState();\n            });\n            account = zilPay.wallet\n                .observableAccount()\n                .subscribe(() => getContractState());\n\n            getContractState();\n        } catch (e) {\n            console.log(e);\n        }\n        return function cleanup() {\n            block?.unsubscribe?.();\n            account?.unsubscribe?.();\n        };\n    }, [error]);\n\n    return zilPay ? (\n        <div className="rentonzilliqa">\n            <Router>\n                <Header {...{ setShowSignUp }} />\n                <main>\n                    <Switch>\n                        <Route path="/" exact>\n                            <Redirect to={"/listings"} />\n                        </Route>\n                        <Route path="/listings">\n                            <Listings />\n                        </Route>\n                        <Route path="/listing/:id">\n                            <Listing />\n                        </Route>\n                        <Redirect to={"/listings"} />\n                    </Switch>\n                    <CreateAccountModal {...{ showSignUp, setShowSignUp }} />\n                </main>\n            </Router>\n            <Toaster\n                toastOptions={{\n                    success: { duration: 6000 },\n                    error: { duration: 8000 },\n                    loading: { duration: 130000 },\n                }}\n            />\n        </div>\n    ) : (\n        <main className="h-screen flex justify-center items-center text-xl">\n            Please install ZilPay\n        </main>\n    );\n};\n\nexport default App;\n')),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Quinence/zilliqa-fullstack-app/blob/main/src/App.tsx"}),"/src/App.tsx")),Object(r.b)("br",null),Object(r.b)("h2",{id:"indextsx"},Object(r.b)("inlineCode",{parentName:"h2"},"index.tsx")),Object(r.b)("p",null,"Next, we wrap the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#app"}),Object(r.b)("inlineCode",{parentName:"a"},"App"))," component with the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"dev-rentonzilliqa-scripting#contextcontainer"}),Object(r.b)("inlineCode",{parentName:"a"},"ContextContainer"))," that we created earlier."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\nimport ReactDOM from "react-dom";\nimport "./index.css";\nimport "./tailwind.output.css";\nimport App from "./App";\nimport reportWebVitals from "./reportWebVitals";\nimport ContextContainer from "./functions/contextContainer";\n\nReactDOM.render(\n    <React.StrictMode>\n        <ContextContainer.Provider>\n            <App />\n        </ContextContainer.Provider>\n    </React.StrictMode>,\n    document.getElementById("root")\n);\n\nreportWebVitals();\n')),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Quinence/zilliqa-fullstack-app/blob/main/src/index.tsx"}),"/src/index.tsx")),Object(r.b)("h2",{id:"listings-page"},"Listings Page"),Object(r.b)("p",null,"Now we get to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"dev-rentonzilliqa-frontend#listings-page"}),"Listings Page"),"."),Object(r.b)("p",null,"When there is a change in the ",Object(r.b)("inlineCode",{parentName:"p"},"contractState")," or ",Object(r.b)("inlineCode",{parentName:"p"},"blockNumber"),", using the ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," hook, we update the ",Object(r.b)("inlineCode",{parentName:"p"},"listings")," displayed on the page. We create a ",Object(r.b)("inlineCode",{parentName:"p"},"hostedListings")," object that filters out the listings that are hosted by the current user."),Object(r.b)("p",null,"The listings are presented using the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"dev-rentonzilliqa-components#listingcard"}),Object(r.b)("inlineCode",{parentName:"a"},"ListingCard"))," component."),Object(r.b)("p",null,"Using the ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," hook, we create ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," state variables for showing and hiding the modals as required. The modals are conditionally mounted based on these variables. To trigger the modals, we set up ",Object(r.b)("inlineCode",{parentName:"p"},"onClick")," listeners as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'On a "New Listing" ',Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"dev-rentonzilliqa-components#button"}),Object(r.b)("inlineCode",{parentName:"a"},"Button")),", which triggers the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"dev-rentonzilliqa-modals#create-listing-modal"}),Object(r.b)("inlineCode",{parentName:"a"},"CreateListing"))," Modal"),Object(r.b)("li",{parentName:"ul"},"On each Listing Card, which triggers the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"dev-rentonzilliqa-modals/#manage-listing-modal"}),Object(r.b)("inlineCode",{parentName:"a"},"ManageListing"))," Modal")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useEffect, useState } from "react";\nimport { useHistory } from "react-router";\nimport ContextContainer from "../functions/contextContainer";\nimport formatListings from "../functions/formatListings";\nimport getCurrentEpochNumber from "../functions/getCurrentEpochNumber";\nimport getCurrentUser from "../functions/getCurretUser";\nimport Button from "./componentButton";\nimport CreateListingModal from "./componentCreateListingModal";\nimport ListingCard from "./componentListingCard";\nimport ManageListingModal from "./componentManageListingModal";\n\nconst Listings: React.FC = () => {\n    const [showCreateListing, setShowCreateListing] = useState<boolean>(false);\n    const [showManageListing, setShowManageListing] = useState<boolean>(false);\n    const [modalListing, setModalListing] =\n        useState<any | undefined>(undefined);\n    const {\n        contractState,\n        zilPay,\n        currentUser,\n        setCurrentUser,\n        currentBlockNumber,\n        setCurrentBlockNumber,\n    } = ContextContainer.useContainer();\n    const [listings, setListings] = useState<any | undefined>(undefined);\n    const history = useHistory();\n\n    const hostedListings = listings?.filter((listing: any) => {\n        return listing.user_is_host;\n    });\n\n    useEffect(() => {\n        (async () => {\n            if (!contractState) return;\n            const currentEpochNumber = await getCurrentEpochNumber(zilPay);\n            setCurrentBlockNumber(currentEpochNumber);\n            const currentUser = getCurrentUser(contractState, zilPay);\n            setCurrentUser(currentUser);\n            setListings(\n                formatListings(\n                    contractState,\n                    currentEpochNumber,\n                    currentUser.address\n                )\n            );\n        })();\n    }, [contractState, currentBlockNumber]);\n\n    return (\n        <div className="container mx-auto px-4 lg:px-2 pb-20">\n            <div className="pt-20 pb-10 flex justify-between items-center">\n                <h1 className="text-gray-900 text-2xl font-medium">Listings</h1>\n            </div>\n            {listings ? (\n                <>\n                    {listings.length > 0 ? (\n                        <>\n                            <div className="grid md:grid-cols-5 gap-6">\n                                {listings.map((listing: any, index: number) => {\n                                    return (\n                                        <ListingCard\n                                            {...listing}\n                                            onClick={() => {\n                                                history.push(\n                                                    `/listing/${listing.id}`\n                                                );\n                                            }}\n                                        />\n                                    );\n                                })}\n                            </div>\n                        </>\n                    ) : (\n                        <p className="text-xl text-center">No listings</p>\n                    )}\n                    {currentUser?.role === "host" && (\n                        <>\n                            <div className="pt-32 pb-10 flex justify-between items-center">\n                                <h1 className="text-gray-900 text-2xl font-medium">\n                                    Hosted\n                                </h1>\n                                <Button\n                                    text={"New Listing"}\n                                    onClick={() => setShowCreateListing(true)}\n                                />\n                            </div>\n                            {hostedListings.length > 0 ? (\n                                <div className="grid md:grid-cols-5 gap-6">\n                                    {hostedListings.map(\n                                        (listing: any, index: number) => {\n                                            return (\n                                                <ListingCard\n                                                    {...listing}\n                                                    onClick={() => {\n                                                        setModalListing(\n                                                            listing\n                                                        );\n                                                        setShowManageListing(\n                                                            true\n                                                        );\n                                                    }}\n                                                />\n                                            );\n                                        }\n                                    )}\n                                </div>\n                            ) : (\n                                <p className="text-xl text-center">\n                                    No listings\n                                </p>\n                            )}\n                        </>\n                    )}\n                </>\n            ) : zilPay.wallet.isConnect ? (\n                <p className="text-xl text-center">Loading</p>\n            ) : (\n                <p className="text-xl text-center">Please connect ZilPay</p>\n            )}\n            <CreateListingModal\n                {...{ showCreateListing, setShowCreateListing }}\n            />\n            {modalListing && (\n                <ManageListingModal\n                    {...{\n                        modalListing,\n                        showManageListing,\n                        setShowManageListing,\n                    }}\n                />\n            )}\n        </div>\n    );\n};\n\nexport default Listings;\n')),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Quinence/zilliqa-fullstack-app/blob/main/src/components/componentListings.tsx"}),"/src/components/componentListings.tsx")),Object(r.b)("br",null),Object(r.b)("h2",{id:"individual-listing-page"},"Individual Listing Page"),Object(r.b)("p",null,"This component presents a detailed view of the individual listing on the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"dev-rentonzilliqa-frontend#listing-page"}),"Listing Page"),"."),Object(r.b)("p",null,"The description, rooms, amenities, map, and description are presented in a detailed manner. The ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"dev-rentonzilliqa-components#listing-icons"}),Object(r.b)("inlineCode",{parentName:"a"},"ListingIcons"))," are used to provide a clear view of the Rooms and Amenities sections."),Object(r.b)("p",null,"Users can book the listing within this component, which uses the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"dev-rentonzilliqa-scripting#booklistingtransition"}),Object(r.b)("inlineCode",{parentName:"a"},"bookListingTransition"))," function."),Object(r.b)("p",null,"The embed url for the Map is built using the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://maps.google.com/pluscodes/"}),"Google Maps Plus Code")," and the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://developers.google.com/maps/documentation/embed/get-api-keys"}),"Google Maps API Key"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useEffect, useState } from "react";\nimport ContextContainer from "../functions/contextContainer";\nimport formatListings from "../functions/formatListings";\nimport getCurrentEpochNumber from "../functions/getCurrentEpochNumber";\nimport getCurrentUser from "../functions/getCurretUser";\nimport Button from "./componentButton";\nimport { useHistory, useParams } from "react-router-dom";\nimport bookListingTransition from "../functions/bookListingTransition";\nimport {\n    BathroomIcon,\n    BedroomIcon,\n    HvacIcon,\n    KitchenIcon,\n    LaundryIcon,\n    TvIcon,\n    WifiIcon,\n} from "./componentListingIcons";\n\nconst Listing: React.FC = () => {\n    const [listing, setListing] = useState<any | undefined>(undefined);\n    const {\n        contract,\n        contractState,\n        zilPay,\n        setCurrentUser,\n        currentBlockNumber,\n        setCurrentBlockNumber,\n    } = ContextContainer.useContainer();\n    const { id } = useParams<{ id: string }>();\n    const history = useHistory();\n\n    const plusCode = listing?.location.replace(" ", "+").replace("+", "%2B");\n    const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&q=${plusCode}&zoom=18`;\n\n    useEffect(() => {\n        (async () => {\n            if (!contractState) return;\n            const currentEpochNumber = await getCurrentEpochNumber(zilPay);\n            setCurrentBlockNumber(currentEpochNumber);\n            const currentUser = getCurrentUser(contractState, zilPay);\n            setCurrentUser(currentUser);\n            const listing = formatListings(\n                contractState,\n                currentEpochNumber,\n                currentUser.address\n            ).filter((listing) => {\n                return listing.id === id;\n            })?.[0];\n            if (!listing) history.push("/listings");\n            setListing(listing);\n        })();\n    }, [contractState, currentBlockNumber]);\n\n    const makeReservation = () => {\n        bookListingTransition(contract, zilPay, listing.id, listing.price);\n    };\n\n    return (\n        <>\n            {listing ? (\n                <div className="container mx-auto px-4 lg:px-2 pb-20">\n                    <div className="pt-20 pb-10">\n                        <h1 className="text-gray-900 text-3xl font-medium">\n                            {listing.name}\n                        </h1>\n                    </div>\n                    <div className="grid lg:grid-cols-3 gap-12 relative">\n                        <div className="order-2 lg:order-none lg:col-span-2">\n                            <img\n                                className="rounded-xl bg-gray-100"\n                                src={listing.image}\n                            />\n                            <div className="max-w-prose mt-20 mb-12">\n                                <h2 className="text-2xl font-medium text-gray-900 pb-4">\n                                    About\n                                </h2>\n                                <p className="text-gray-700">\n                                    {listing.description}\n                                </p>\n                            </div>\n                            <div className="h-px bg-gray-300"></div>\n                            <div className="my-12">\n                                <h2 className="text-2xl font-medium text-gray-900 pb-4">\n                                    Rooms\n                                </h2>\n                                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">\n                                    <div className="border p-6 rounded-lg">\n                                        <BedroomIcon />\n                                        <p className="text-lg text-gray-900 pt-1">\n                                            {listing.rooms} Bedroom\n                                            {listing.rooms > 1 ? "s" : ""}\n                                        </p>\n                                    </div>\n                                    <div className="border p-6 rounded-lg">\n                                        <BathroomIcon />\n                                        <p className="text-lg text-gray-900 pt-1">\n                                            {listing.bathrooms} Bathroom\n                                            {listing.bathrooms > 1 ? "s" : ""}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div className="h-px bg-gray-300"></div>\n                            {Object.values(listing.amenities).filter?.(\n                                (amenity: any) => {\n                                    return amenity;\n                                }\n                            ).length > 0 && (\n                                <div className="my-12">\n                                    <h2 className="text-2xl font-medium text-gray-900 pb-4">\n                                        Amenities\n                                    </h2>\n                                    <div className="grid grid-cols-2 gap-6">\n                                        {listing.amenities.wifi && (\n                                            <div className="flex items-center">\n                                                <WifiIcon />\n                                                <p className="pl-4">WiFi</p>\n                                            </div>\n                                        )}\n                                        {listing.amenities.kitchen && (\n                                            <div className="flex items-center">\n                                                <KitchenIcon />\n                                                <p className="pl-4">Kitchen</p>\n                                            </div>\n                                        )}\n                                        {listing.amenities.tv && (\n                                            <div className="flex items-center">\n                                                <TvIcon />\n                                                <p className="pl-4">\n                                                    Television\n                                                </p>\n                                            </div>\n                                        )}\n                                        {listing.amenities.laundry && (\n                                            <div className="flex items-center">\n                                                <LaundryIcon />\n                                                <p className="pl-4">Laundry</p>\n                                            </div>\n                                        )}\n                                        {listing.amenities.hvac && (\n                                            <div className="flex items-center">\n                                                <HvacIcon />\n                                                <p className="pl-4">HVAC</p>\n                                            </div>\n                                        )}\n                                    </div>\n                                </div>\n                            )}\n                            {plusCode && (\n                                <>\n                                    <div className="h-px bg-gray-300"></div>\n                                    <div className="my-12">\n                                        <h2 className="text-2xl font-medium text-gray-900 pb-4">\n                                            Location\n                                        </h2>\n                                        <iframe\n                                            className="w-full h-96 bg-gray-100"\n                                            src={mapEmbedUrl}\n                                        ></iframe>\n                                    </div>\n                                </>\n                            )}\n                        </div>\n\n                        <div className="order-1">\n                            <div className="sticky top-32 p-6 rounded-xl border-2 w-full">\n                                <div className="text-center">\n                                    <p className="mt-4 mb-8 text-xl text-gray-900 font-medium">\n                                        {listing.price} ZIL\n                                        <span className="text-gray-700 font-normal">\n                                            {" "}\n                                            / night\n                                        </span>\n                                    </p>\n                                    {listing.rented && (\n                                        <p className="mb-10 px-2 py-1 bg-gray-200 text-gray-600 rounded uppercase text-xs tracking-wide font-semibold  inline-block">\n                                            Unavailable\n                                        </p>\n                                    )}\n                                </div>\n                                <Button\n                                    modal\n                                    onClick={makeReservation}\n                                    text="Make Reservation"\n                                />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ) : zilPay.wallet.isConnect ? (\n                <p className="pt-20 text-xl text-center">Loading</p>\n            ) : (\n                <p className="pt-20 text-xl text-center">\n                    Please connect ZilPay\n                </p>\n            )}\n        </>\n    );\n};\n\nexport default Listing;\n')),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Quinence/zilliqa-fullstack-app/blob/main/src/components/componentListing.tsx"}),"/src/components/componentListing.tsx")))}p.isMDXComponent=!0},295:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,b=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return t?a.a.createElement(b,s(s({ref:n},l),{},{components:t})):a.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
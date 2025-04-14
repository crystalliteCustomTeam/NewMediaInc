import RefundForm from "../../components/RefundForm"

const RefundPolicy = () => {
    return (
        <>
            <section>
                <div className="relative xl:pt-[130px] lg:pt-[100px] md:pt-[80px] py-[40px] bg-black">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2">
                            <div className="text-white">
                                <h1 className="text-3xl font-bold mb-6">Refund Policy for Infiniti Media INC</h1>
                                <p className="border-b pb-4 text-justify"><strong className="text-[#dee56f]">Overview:</strong> Infiniti Media INC, aims to provide excellent service and ensure customer satisfaction. Our refund and cancellation policies are designed to protect both our clients and our company. Please read through the following policy to understand how refund requests are handled.</p>
                                <div className="text-xl font-semibold mb-2 mt-4">General Refund Policy:</div>
                                <ul className="list-decimal list-inside">
                                    <li className="mb-2 text-justify">
                                        <strong className="text-[#dee56f]">Cancellation: </strong>
                                        You are eligible for a full refund (less a 10% processing fee) if the order is canceled within 24 hours of order placement. Refunds are not applicable if initial content or designs are delivered or revisions are requested within this timeframe.
                                    </li>
                                    <li className="mb-2 text-justify">
                                        <strong className="text-[#dee56f]">Order Inactivity: </strong>
                                        No refund will be issued if there is no activity on the order for 30 days after the order is placed. To reactivate the project, you will need to pay a fee depending on the project scope.
                                    </li>
                                    <li className="mb-2 text-justify">
                                        <strong className="text-[#dee56f]">Final Deliverables: </strong>
                                        No refund will be issued if there is no activity on the order for 30 days after the order is placed. To reactivate the project, you will need to pay a fee depending on the project scope.
                                    </li>
                                    <li className="mb-2 text-justify">
                                        <strong className="text-[#dee56f]">Refund Reasons: </strong>
                                        Refund requests must be based on valid reasons, such as non-compliance with the brief or inadequate revisions. No refunds will be issued for change of mind or if the content meets the agreed-upon requirements.
                                    </li>
                                    <li className="mb-2 text-justify">
                                        <strong className="text-[#dee56f]">Good Faith: </strong>
                                        If you have placed the same content order with multiple agencies to claim a refund, this will be considered a breach of good faith, and the refund request may be denied.
                                    </li>
                                    <li>
                                        <strong className="text-[#dee56f]">Customer Feedback: </strong>
                                        Clients are expected to provide timely feedback to ensure the completion of the project. Lack of feedback may affect the project delivery and refund eligibility.
                                    </li>
                                </ul>
                                <div className="text-xl font-semibold mb-2 mt-4">How to Claim Your Refund:</div>
                                <div>
                                    <p className="mb-2 text-justify">To ensure your refund request is processed smoothly, please follow these steps:</p>
                                    <ul>
                                        <li>
                                            <strong className="mb-2 block">Submit your Refund Request:</strong>
                                            Fill out the refund form below or email it to <a href="mailto:finance@infinitimediainc.com" className="text-[#dee56f]">finance@infinitimediainc.com</a>.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="p-2 text-[#dee56f]">Client Name:</p>
                                    <p className="p-2 text-[#dee56f]">Client Email:</p>
                                    <p className="p-2 text-[#dee56f]">Client Content Number:</p>
                                    <p className="p-2 text-[#dee56f]">Payment Method:</p>
                                    <p className="pl-4">Card / Cheque / Wire</p>
                                    <p className="p-2 text-[#dee56f]">Last 4 Digits of Card:</p>
                                    <p className="p-2 text-[#dee56f]">Invoice Number:</p>
                                    <p className="p-2 text-[#dee56f]">Date of Order:</p>
                                    <p className="p-2 text-[#dee56f]">Reason for Refund Request:</p>
                                    <ul className="pl-4">
                                        <li>Pre-delivery refund</li>
                                        <li>Post-delivery refund</li>
                                        <li>Inactivity</li>
                                        <li>Other (please specify)</li>
                                    </ul>
                                    <p className="p-2 text-[#dee56f]">Additional Comments or Concerns:</p>
                                </div>
                                <p className="text-justify">
                                    By submitting this form, you acknowledge that you have read and understood our Refund Policy and agree to the terms stated above.
                                </p>
                                <div className="text-xl font-semibold mb-2 mt-4">Contact Us:</div>
                                <p className="text-justify mb-4">For any inquiries or concerns regarding the Refund Policy, please feel free to reach out to our customer support team. We are here to assist you and ensure your satisfaction with our services.</p>
                                <ul>
                                    <li>
                                        <strong className="text-[#dee56f]">Email: </strong>
                                        <a href="mailto:finance@infinitimediainc.com">finance@infinitimediainc.com</a>
                                    </li>
                                    <li>
                                        <strong className="text-[#dee56f]">Live Chat: </strong>
                                        Available on our website
                                    </li>
                                </ul>
                            </div>
                            <div className="sticky top-6 self-start">
                                <RefundForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RefundPolicy
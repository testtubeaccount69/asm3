import { useState } from "react";

const PopupPage = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Xin chào", user: true },
        { text: "Làm thế nào để xem các sản phẩm", user: true },
        { text: "ADMIN: Chào bạn", user: false },
        { text: "ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm", user: false }
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages(prev => [...prev, { text: input, user: true }]);
        setInput("");
    };

    return (
        <>
            {/* FLOATING CHAT BUTTON */}
            <div
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    zIndex: 9999,
                    cursor: "pointer",
                }}
                onClick={() => setOpen(true)}
            >
                <div
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#000",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
                    }}
                >
                    💬
                </div>
            </div>

            {/* CHAT POPUP */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "100px",
                        right: "30px",
                        width: "350px",
                        height: "480px",
                        background: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 9999,
                    }}
                >
                    {/* HEADER */}
                    <div
                        style={{
                            padding: "15px",
                            borderBottom: "1px solid #eee",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <strong>Customer Support</strong>

                        <button
                            className="btn btn-sm btn-light"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                    </div>

                    {/* MESSAGES */}
                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "15px",
                            background: "#f9f9f9"
                        }}
                    >
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    justifyContent: msg.user ? "flex-end" : "flex-start",
                                    marginBottom: "10px"
                                }}
                            >
                                <div
                                    style={{
                                        background: msg.user ? "#4ea5ff" : "#eee",
                                        color: msg.user ? "#fff" : "#333",
                                        padding: "8px 12px",
                                        borderRadius: "12px",
                                        maxWidth: "70%",
                                        fontSize: "14px"
                                    }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* INPUT */}
                    <div
                        style={{
                            padding: "10px",
                            borderTop: "1px solid #eee",
                            display: "flex",
                            gap: "10px"
                        }}
                    >
                        <input
                            className="form-control"
                            placeholder="Enter message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />

                        <button className="btn btn-primary" onClick={sendMessage}>
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupPage;

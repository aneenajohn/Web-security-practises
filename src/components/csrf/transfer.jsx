import { useState } from "react";

const TransferForm = () => {
  const [amount, setAmount] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  // Fetch CSRF token from backend
  useEffect(() => {
    fetch("https://bank.com/api/csrf-token", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.token));
  }, []);

  // ❌ CSRF risk
  // If a user visits a malicious site, this function could be triggered unknowingly.
  const transferMoney = () => {
    fetch("https://bank.com/api/transfer", {
      method: "POST",
      credentials: "include", // Sends cookies automatically
      body: JSON.stringify({ amount: 1000, to: "attacker_account" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Transfer successful!", data))
      .catch((err) => console.error("Transfer failed", err));
  };
  
  // ✅ Safe!
  const handleTransfer = () => {
    fetch("https://bank.com/api/transfer", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ amount, to: "recipient_account" }),
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken, // Secure against CSRF
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("Transfer successful!", data))
      .catch((err) => console.error("Transfer failed", err));
  };

  return (
    <div>
      <h2>Transfer Money</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

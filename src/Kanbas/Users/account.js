import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");
  const navigate = useNavigate();

  const fetchAccount = async () => {
    const accountData = await client.account();
    setAccount(accountData);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  const save = async () => {
    await client.updateUser(account);
    setSaveMessage("User information saved successfully!");
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="m-4">
      <h1>Account</h1>
      {account ? (
        <div>
          <input
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            className="form-control mb-1"
          />
          <input
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
            className="form-control mb-1"
            placeholder="First Name"
          />
          <input
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
            className="form-control mb-1"
            placeholder="Last Name"
          />
          <input
            value={account.dob ? account.dob?.split("T")[0] : ""}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            className="form-control mb-1"
            type={"date"}
            placeholder="Date of birth"
          />
          <input
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            className="form-control mb-1"
            placeholder="Email"
          />
          <select
            value={account.role}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
            className="form-control mb-1"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button onClick={save} className="btn btn-secondary w-100 mb-1">
            Save
          </button>
          <button className="btn btn-danger w-100 mb-1" onClick={signout}>
            Signout
          </button>

          {saveMessage && (
            <div className="alert alert-success w-100">{saveMessage}</div>
          )}
        </div>
      ) : (
        <p>Not signed in</p>
      )}
      <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
        Users
      </Link>
    </div>
  );
}

export default Account;

'use client';

import { useState } from 'react';

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="legacy-container">
      <div className="legacy-header">
        <h1>Merchant Onboarding &amp; Access Management System</h1>
        <p className="legacy-subtitle">Version 2.1.3 - Last Updated: 03/15/2003</p>
      </div>

      <form onSubmit={handleSubmit} className="legacy-form">
        <table className="legacy-table" cellPadding="8" cellSpacing="0">
          <tbody>
            <tr className="legacy-section-header">
              <td colSpan={2}>
                <strong>Business Information</strong>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="businessName">Business Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  className="legacy-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="businessType">Business Type:</label>
              </td>
              <td>
                <select id="businessType" name="businessType" className="legacy-select" required>
                  <option value="">-- Select --</option>
                  <option value="sole">Sole Proprietorship</option>
                  <option value="llc">LLC</option>
                  <option value="corporation">Corporation</option>
                  <option value="partnership">Partnership</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="taxId">Tax Identification Number (EIN/SSN):</label>
              </td>
              <td>
                <input
                  type="text"
                  id="taxId"
                  name="taxId"
                  className="legacy-input"
                  maxLength={9}
                  required
                />
                <span className="legacy-help">(Format: XX-XXXXXXX)</span>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="dba">DBA (Doing Business As):</label>
              </td>
              <td>
                <input type="text" id="dba" name="dba" className="legacy-input" />
                <span className="legacy-help">(Optional)</span>
              </td>
            </tr>

            <tr className="legacy-section-header">
              <td colSpan={2}>
                <strong>Contact Information</strong>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="contactName">Primary Contact Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  className="legacy-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="title">Title:</label>
              </td>
              <td>
                <input type="text" id="title" name="title" className="legacy-input" />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="email">Email Address:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="legacy-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="phone">Phone Number:</label>
              </td>
              <td>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="legacy-input"
                  placeholder="(XXX) XXX-XXXX"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="fax">Fax Number:</label>
              </td>
              <td>
                <input
                  type="tel"
                  id="fax"
                  name="fax"
                  className="legacy-input"
                  placeholder="(XXX) XXX-XXXX"
                />
                <span className="legacy-help">(Optional)</span>
              </td>
            </tr>

            <tr className="legacy-section-header">
              <td colSpan={2}>
                <strong>Business Address</strong>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="address1">Street Address:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  className="legacy-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="address2">Address Line 2:</label>
              </td>
              <td>
                <input type="text" id="address2" name="address2" className="legacy-input" />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="city">City:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="legacy-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="state">State:</label>
              </td>
              <td>
                <select id="state" name="state" className="legacy-select" required>
                  <option value="">-- Select State --</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="zip">ZIP Code:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="legacy-input"
                  maxLength={10}
                  required
                />
              </td>
            </tr>

            <tr className="legacy-section-header">
              <td colSpan={2}>
                <strong>Banking Information</strong>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="bankName">Bank Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  className="legacy-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="accountNumber">Account Number:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  className="legacy-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="routingNumber">Routing Number:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="routingNumber"
                  name="routingNumber"
                  className="legacy-input"
                  maxLength={9}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="legacy-label">
                <label htmlFor="accountType">Account Type:</label>
              </td>
              <td>
                <select id="accountType" name="accountType" className="legacy-select" required>
                  <option value="">-- Select --</option>
                  <option value="checking">Checking</option>
                  <option value="savings">Savings</option>
                </select>
              </td>
            </tr>

            <tr className="legacy-section-header">
              <td colSpan={2}>
                <strong>Access Management &amp; Permissions</strong>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">User Roles:</td>
              <td>
                <div className="legacy-checkbox-group">
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="roles" value="admin" className="legacy-checkbox" />
                    Administrator
                  </label>
                  <br />
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="roles" value="merchant" className="legacy-checkbox" />
                    Merchant Manager
                  </label>
                  <br />
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="roles" value="accounting" className="legacy-checkbox" />
                    Accounting
                  </label>
                  <br />
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="roles" value="reporting" className="legacy-checkbox" />
                    Reporting Only
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td className="legacy-label">Permissions:</td>
              <td>
                <div className="legacy-checkbox-group">
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="permissions" value="transactions" className="legacy-checkbox" />
                    View Transactions
                  </label>
                  <br />
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="permissions" value="refunds" className="legacy-checkbox" />
                    Process Refunds
                  </label>
                  <br />
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="permissions" value="settlements" className="legacy-checkbox" />
                    View Settlements
                  </label>
                  <br />
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="permissions" value="reports" className="legacy-checkbox" />
                    Generate Reports
                  </label>
                  <br />
                  <label className="legacy-checkbox-label">
                    <input type="checkbox" name="permissions" value="settings" className="legacy-checkbox" />
                    Modify Settings
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="legacy-submit-cell">
                <button type="submit" className="legacy-button">
                  Submit Merchant Application
                </button>
                <button type="reset" className="legacy-button legacy-button-secondary">
                  Clear Form
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {showToast && (
        <div className="legacy-toast">
          <div className="legacy-toast-content">
            <strong>✓ Success!</strong> User has been created successfully.
          </div>
        </div>
      )}

      <div className="legacy-footer">
        <p>
          &copy; 2003 Payment Processing Systems, Inc. All rights reserved. |{' '}
          <a href="#" className="legacy-link">Privacy Policy</a> |{' '}
          <a href="#" className="legacy-link">Terms of Service</a>
        </p>
      </div>
    </div>
  );
}

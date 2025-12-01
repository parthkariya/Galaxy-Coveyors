import React, { useEffect } from "react";
import "./Terms.css";

const Terms = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, [])
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p className="updated-date">Last Updated: 28th November 2025</p>

      <p><strong>Galaxy Conveyors Pvt. Ltd.</strong></p>
      <p>Phone: +91 90999 32799</p>
      <p>Email: <a href="mailto:galaxy@galaxyconveyors.com">galaxy@galaxyconveyors.com</a></p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Galaxy Conveyors Pvt. Ltd. (“Company”, “we”, “us”). By accessing
        our website (www.galaxyconveyors.com) or using our products and services,
        you agree to these Terms & Conditions. Please read them carefully before
        using our website.
      </p>

      <h2>2. Company Overview</h2>
      <p>
        Galaxy Conveyors Pvt. Ltd. is a leading manufacturer of industrial roller
        chains, conveyor chains, sprockets, and custom transmission solutions.
        All transactions and website usage are governed by Indian law.
      </p>

      <h2>3. Website Usage</h2>
      <p>By using this website, you agree not to:</p>
      <ul>
        <li>Use the site for unlawful purposes</li>
        <li>Copy or redistribute website content without written permission</li>
        <li>Attempt to hack, disrupt, or misuse any part of the site</li>
        <li>Provide false information when contacting us</li>
      </ul>
      <p>
        We may update, modify, or suspend website access for maintenance without
        prior notice.
      </p>

      <h2>4. Intellectual Property Rights</h2>
      <p>
        All content on this website—including text, images, graphics, product
        designs, logos, and technical documents—is the exclusive property of
        Galaxy Conveyors Pvt. Ltd. You may not copy, reproduce, download, or use
        any content without prior written consent.
      </p>

      <h2>5. Product Descriptions & Specifications</h2>
      <p>
        All product information displayed on the website is indicative. Actual
        specifications, materials, and dimensions may vary based on
        customisation. Galaxy Conveyors reserves the right to modify product
        designs or specifications without notice.
      </p>

      <h2>6. Order Process</h2>
      <p>An order is confirmed only after:</p>
      <ul>
        <li>We receive an official purchase order (PO)</li>
        <li>We acknowledge the order in writing</li>
        <li>The necessary advance payment has been received</li>
      </ul>
      <p>
        We reserve the right to accept or reject orders based on technical or
        commercial considerations.
      </p>

      <h2>7. Payment Terms</h2>
      <ul>
        <li>Standard terms: Advance + Balance before dispatch</li>
        <li>Credit terms (Net 30/45) apply only to approved clients</li>
        <li>Goods remain the property of Galaxy Conveyors until full payment</li>
      </ul>
      <p>Delayed payments may attract interest as per commercial norms.</p>

      <h2>8. Delivery & Shipping</h2>
      <ul>
        <li>Delivery times are estimates unless contractually committed</li>
        <li>
          Delays caused by transportation, strikes, shortages, or force majeure
          are not our responsibility
        </li>
        <li>
          Risk transfers to the buyer once goods leave our premises (Rajkot,
          Gujarat)
        </li>
      </ul>
      <p>Please inspect goods upon delivery and report any issues immediately.</p>

      <h2>9. Packaging</h2>
      <p>
        Products are shipped with standard industrial packaging. Additional
        packaging (wooden box, export packing, fumigation, etc.) may attract
        extra charges.
      </p>

      <h2>10. Warranty Policy</h2>
      <p>
        Galaxy Conveyors provides a limited warranty against manufacturing defects
        (6–12 months, depending on the product).
      </p>
      <p>Warranty does not cover:</p>
      <ul>
        <li>Normal wear & tear</li>
        <li>Improper installation or misuse</li>
        <li>Failure due to lack of lubrication/maintenance</li>
        <li>Operating the chain beyond recommended limits</li>
        <li>Environmental corrosion</li>
      </ul>
      <p>
        We may repair, replace, or credit the defective item after inspection.
      </p>

      <h2>11. Returns, Replacements & Cancellation</h2>
      <ul>
        <li>Custom-manufactured products are non-cancellable and non-returnable</li>
        <li>Standard items may be returned only with prior approval</li>
        <li>
          Return shipping costs are the buyer’s responsibility unless the item is
          defective
        </li>
        <li>Cancellation is not allowed after production has started</li>
      </ul>

      <h2>12. Limitation of Liability</h2>
      <p>Galaxy Conveyors is not responsible for:</p>
      <ul>
        <li>Loss of profits</li>
        <li>Downtime or machine stoppage</li>
        <li>Indirect or consequential damages</li>
        <li>Improper usage or installation of chains</li>
      </ul>
      <p>Our total liability is limited to the invoice value of the goods.</p>

      <h2>13. Force Majeure</h2>
      <p>
        The company is not liable for delay or failure due to circumstances
        beyond its control, such as natural disasters, strikes, transport delays,
        pandemics, or government regulations.
      </p>

      <h2>14. Compliance & Safety</h2>
      <p>
        Customers are responsible for ensuring proper installation, lubrication,
        tensioning, and usage of the chains as per industry standards. Misuse or
        unsafe installation voids warranty.
      </p>

      <h2>15. Privacy & Communication</h2>
      <p>
        By contacting us via our website, email, or phone, you consent to receive
        business communication from Galaxy Conveyors.
      </p>
      <p>For details, refer to our Privacy Policy.</p>

      <h2>16. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes will fall
        exclusively under the jurisdiction of Rajkot, Gujarat. Disputes will be
        resolved under the Arbitration & Conciliation Act, 1996.
      </p>

      <h2>17. Changes to Terms</h2>
      <p>
        We may update these Terms & Conditions at any time. Continued use of our
        website implies acceptance of the updated terms.
      </p>

      <h2>18. Contact Information</h2>
      <p><strong>Galaxy Conveyors Pvt. Ltd.</strong></p>
      <p>Phone: +91 90999 32799</p>
      <p>Email: galaxy@galaxyconveyors.com</p>
      <p>Website: www.galaxyconveyors.com</p>
    </div>
  );
};

export default Terms;

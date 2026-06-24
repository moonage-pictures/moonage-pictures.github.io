import { useEffect } from "react";
import { usePageData } from "@/lib/cms";
import { Loader } from "@/components/Loader";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading uppercase text-[1.75rem] tracking-[0.2rem] mb-8">
          Privacy Notice – Moonage Pictures Limited
        </h1>
        <div className="page-content">
          <p>Last updated: June 2026</p>
          <p>
            Moonage Pictures Limited (company number 10956051) of 28 Little
            Russell Street, London WC1A 2HN (“we”, “us”, “our”) is the
            controller responsible for this website www.moonagepictures.com
            (“the Website”).
          </p>
          <p>
            This Privacy Notice explains how we (including our parent,
            subsidiaries and affiliates) collect, use, and share your personal
            data as a controller in connection with your use of our website,
            interaction with its content, or contact with us, and describes your
            rights under UK data protection law.
          </p>
          <p>
            Our Website is intended for a general audience. It is not directed
            at children and we do not knowingly collect personal data from
            children under 16.
          </p>
          <ol>
            <li>
              <strong>1. What personal data do we collect?</strong>
              <p>We collect minimal personal data. This may include:</p>
              <p className="ml-4">
                - Information you provide to us when you contact us directly
                (for example, by email), such as your name, email address, and
                the content of your enquiry.
              </p>
              <p className="ml-4">
                - Technical information generated through the operation of
                embedded third-party services.
              </p>
              <p>
                We do not operate user accounts, collect analytics data, or
                carry out behavioral tracking of Website visitors.
              </p>
            </li>
            <li>
              <strong>2. How do we use your personal data?</strong>
              <p>We use personal data only for the following purposes:</p>
              <p className="ml-4">
                - To respond to correspondence or enquiries sent to us.  To
                operate and display Website content (including embedded video
                and map content).
              </p>
              <p className="ml-4">
                - To comply with legal or regulatory obligations, where
                applicable.
              </p>
              <p className="ml-4">
                - To improve our customer services, dispute resolution and fraud
                prevention and detection.
              </p>
              <p className="ml-4">
                - To establish, exercise or defend legal claims.
              </p>
            </li>
            <li>
              <strong>3. Lawful basis for processing</strong>
              <p>We rely on the following lawful bases under UK GDPR:</p>
              <p className="ml-4">
                - Legitimate interests – responding to enquiries and operating
                the Website.
              </p>
              <p className="ml-4">
                - Consent – where required for cookies and tracking technologies
                used by embedded third-party services.
              </p>
              <p className="ml-4">
                - Processing necessary for compliance with a legal obligation.
              </p>
            </li>
            <li>
              <strong>4. Who do we share personal data with?</strong>
              <p>
                For the purposes described in this Notice, we sometimes share
                your personal data with:
              </p>
              <p className="ml-4">- our affiliated companies;</p>
              <p className="ml-4">
                - unaffiliated companies or individuals we may hire or work with
                that provide us with professional advice, business support, or
                perform services on our behalf, to conduct the purposes noted
                above;
              </p>
              <p className="ml-4">
                - to any other party with your prior consent to do so.
              </p>
              <p>
                We may combine all the information we collect from or receive
                about you for the outlined purposes. We may aggregate or
                de-identify your information and may use or share aggregated or
                de-identified information for any purpose, and such information
                is not subject to this Notice.
              </p>
              <p>
                If there are changes to our business (such as a re-organisation
                or restructuring), your personal data will remain subject to
                this Notice (as amended from time to time). However, where your
                personal data is transferred to a new owner following a merger
                or acquisition it may be subject to a different privacy notice.
                Such a transaction could involve us: (i) retaining the right to
                continue to use transferred personal data in addition to the
                right of the new owner to use such information; and (ii)
                engaging in additional transfers of personal data (including new
                personal data) with the new owner from time to time following
                such a transaction.
              </p>
            </li>
            <li>
              <strong>5. International transfers</strong>
              <p>
                This means we only transfer your personal data where it is
                permitted under UK data protection laws. The main transfers take
                place if:
              </p>
              <p className="ml-4">
                - the UK government has determined the country has an adequate
                level of data protection;
              </p>
              <p className="ml-4">
                - standard data protection clauses (which have been 'adopted' by
                the UK government or European Commission) are in place with the
                service provider or third party; or
              </p>
              <p className="ml-4">
                - we can rely on one of the specified exceptions.
              </p>
              <p>
                We may also take steps to identify and use additional
                protections as appropriate for each data transfer. For example,
                we may require the use of:
              </p>
              <p className="ml-4">
                - technical protections, such as encryption and pseudonymisation
                (which means making sure personal data can no longer be linked
                to you without the use of additional information); and
              </p>
              <p className="ml-4">
                - policies and processes to challenge disproportionate or
                unlawful foreign government or other authority requests.
              </p>
              <p>
                We review our service providers before we use them and also
                ensure that they are only allowed to access the information they
                need to perform the services we request.
              </p>
            </li>
            <li>
              <strong>6. Data retention</strong>
              <p>
                We retain data only as long as necessary to fulfil its purpose
                or meet legal obligations.
              </p>
            </li>
            <li>
              <strong>7. How we keep your personal data safe</strong>
              <p>
                We're committed to protecting your personal data and keeping it
                secure, private and confidential. We put in place appropriate
                technical and organisational measures to help protect the
                security of your personal data. Unfortunately, no measures can
                ever be completely secure. We have implemented various
                safeguards to protect against unauthorised access and
                unnecessary retention of personal data in our systems. These
                include pseudonymisation, encryption, restricting access, and
                retention policies.
              </p>
            </li>
            <li>
              <strong>8. Your rights</strong>
              <p>
                We are committed to respecting the rights that individuals are
                entitled to under data protection laws in the UK. These are:
              </p>
              <p className="ml-4">
                - the right to be informed of the personal information we
                collect and process about you and how we do that (as set out in
                this Notice);
              </p>
              <p className="ml-4">
                - the right to request a copy of the personal information we
                hold about you. To do this, please email us using the email
                address set out below making clear that you are requesting a
                copy of your personal information and including full details of
                what you require. You may also be required to submit a proof of
                your identity;
              </p>
              <p className="ml-4">
                - the right to object to your personal information being
                processed where the legal basis for the processing is our own
                legitimate interests as a business (see section 3 above). We
                will comply with such a request unless there is a lawful reason
                for not doing so, such as when we need to continue to process
                your information to defend a legal claim;
              </p>
              <p className="ml-4">
                - the right to rectification. You may request that we correct
                any inaccurate and/or complete any incomplete personal
                information;
              </p>
              <p className="ml-4">
                - the right to withdraw consent. Where we are processing your
                personal information on the basis that you have given us your
                consent to do so, you may withdraw your consent at any time;
              </p>
              <p className="ml-4">
                - the right of erasure. Where permitted by applicable data
                protection laws, you may request that we erase your personal
                information and we will comply, unless there is a lawful reason
                for not doing so;
              </p>
              <p className="ml-4">
                - the right to data portability in certain circumstances;
              </p>
              <p className="ml-4">
                - the right to complain to us if you believe we have infringed
                data protection law in processing your personal information. If
                you remain unsatisfied with our response, you can contact the
                Information Commissioner's Office via their website (
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ico.org.uk
                </a>
                ).
              </p>
            </li>
            <li>
              <strong>9. Links to third party sites / embeds</strong>
              <p>
                Our service may include links to other sites, products, or
                services that we do not own and are not operated by us, and
                whose privacy practices may differ from our own. If you click a
                third party link, you will be directed to that third party's
                site. If you submit personal data to any such third party sites
                or otherwise submit personal data to such third parties, your
                information is governed by the pertinent third party's privacy
                policies. We have no control over and assume no responsibility
                for the content, privacy policies, or practices of any third
                party sites or services, and this Notice does not apply to your
                activities on any third-party sites or services or any
                information you otherwise disclose to any third parties. We
                encourage you to carefully read the privacy policy of any site
                you visit.
              </p>
              <p>Our embedded third party content includes:</p>
              <p className="ml-4">
                - YouTube videos:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
              <p className="ml-4">
                - Google Maps:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
              <p>Please read their privacy notices respectively.</p>
            </li>
            <li>
              <strong>10. Cookies and similar technologies</strong>
              <p>
                This section describes how cookies and similar technologies are
                used to support our website and the controls which may be
                available to you. We may also use other technologies that do not
                rely on cookies to store or access information on your device.
              </p>
              <p>
                <strong>What are cookies and similar technologies</strong>
              </p>
              <p className="ml-4">
                1. cookies are small text files stored by your browser (a
                browser is the software on your device which enables you to
                access the internet). The cookie stores a unique identifier (a
                string of random characters) so that your browser can be singled
                out from other browsers to show you the information you want.
                And it is often used to link your browser to databases that hold
                data about your online behaviour and inferred interests, along
                with other data such as your IP address or device ID;
              </p>
              <p className="ml-4">
                2. other types of storage, such as local or "HTML" storage. Some
                of our services use local storage technologies that are similar
                to cookies but enable larger amounts of data to be stored. This
                means we can store information like your preferences on your
                device rather than on our own systems; and
              </p>
              <p className="ml-4">
                3. pixels are embedded code to recognise your browser and record
                your interactions with emails, online content or ads.
              </p>
              <p>
                From now on we will refer to these technologies collectively as
                'cookies'. Cookies are typically used by websites or where apps
                have embedded web browsers which allow them to access the
                internet.
              </p>
              <p>
                <strong>
                  Why do we use cookies and what types of cookies do we use
                </strong>
              </p>
              <p>
                Essential: these cookies are necessary for our service to work.
                Without these cookies, we can't provide you with our core
                functionalities and associated services such as login and
                security, so these are not optional. Some of these types of
                cookies also provide you with features which you choose to use.
                They may also help with the following:
              </p>
              <p className="ml-4">
                - to keep our site and your personal data secure;
              </p>
              <p className="ml-4">
                - we may collect anonymous data on how you use our services in
                order to make improvements and to identify and fix any technical
                issues.
              </p>
              <p>
                Please also see the section above on links to third party sites
                and third party embeds which includes information on tracking
                technologies we do not control.
              </p>
            </li>
            <li>
              <strong>11. Contact us</strong>
              <p>
                If you have any questions, concerns or complaints about this
                Notice or our privacy practices, please contact us at{" "}
                <a href="mailto:dpo@moonagepictures.com">
                  dpo@moonagepictures.com
                </a>{" "}
                or write to us at Moonage Pictures Limited, 28 Little Russell
                Street, London WC1A 2HN.
              </p>
            </li>
            <li>
              <strong>12. Changes to this Notice</strong>
              <p>
                We may change this Notice from time to time and we will notify
                you by revising the "Last Updated" date at the top of this
                Notice. If we change this Notice in a way that we believe
                materially affects how we process your personal data, we will
                provide you with advance notice such as via email or by posting
                a notice on the website, if applicable.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

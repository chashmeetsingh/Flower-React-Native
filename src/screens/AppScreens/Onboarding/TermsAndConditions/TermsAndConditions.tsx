import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {connect} from 'react-redux';
import {isEqual,isNull} from 'lodash';
import {loginSuccess, setUserData, signUp} from "../../../../redux/auth/authActions";


interface TermsAndConditionStates {
  isAgreedPrivacyPolicy: boolean;
  isAgreedTermsAndConditions: boolean;
}

class TermsAndConditions extends React.Component<any, TermsAndConditionStates> {
  constructor(props) {
    super(props);
    this.state = {
      isAgreedPrivacyPolicy: false,
      isAgreedTermsAndConditions: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if(!isEqual(nextProps.signUpSuccess,this.props.signUpSuccess) && !isNull(nextProps.signUpSuccess)){
      this.props.dispatch(loginSuccess(true));
      this.props.dispatch(setUserData(nextProps.signUpSuccess));
      this.props.navigation.navigate('EmailConfirmation');
    }
  }

  private onRegister = () => {
    const {signUpData,dispatch} = this.props;
    const data = {
      user:signUpData
    }
    dispatch(signUp(data));
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.termsAndConditions}>
        <View
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FDD12B', fontSize: 15}}>
            Terms and Conditions
          </Text>
        </View>
        <View style={{flex: 3, marginHorizontal: '10.00%'}}>
          <ScrollView>
            <Text style={{fontSize: 12, color: '#424242'}}>
              Flower Health App Service Terms of Service



              The website located at www.flowerhealthapp.com (the “Site”) belongs to Flower, Inc. (“Flower“, “we” or “us”). As provided below, Flower grants you the right to use the Site, our software applications (“Software,” “App”), our vital monitoring sensors ("Devices") and services provided through the Site or Software or Devices (together, the “Service”), subject to the terms and conditions of use (“Terms of Service”) set forth below. The term “you” refers to the person visiting the Site.



              PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY CLICKING “ACCEPT” OR ACCESSING THE SERVICE, YOU AGREE TO BE BOUND BY THE TERMS OF SERVICE. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS OF SERVICE, YOU MAY NOT ACCESS OR USE THE SERVICE. BY ACCEPTING THESE TERMS OR BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE FOLLOWING TERMS AND CONDITIONS, INCLUDING THE Flower PRIVACY POLICY (TOGETHER, THE “TERMS”). If you are not eligible or do not agree to the Terms, then you do not have our permission to use the Service.



              THE SERVICE IS AVAILABLE TO USERS IN THE UNITED STATES OF AMERICA (USA). THE SERVICE IS INTENDED ONLY TO RECORD, DISPLAY, STORE HEALTH INFORMATION (collectively, the “DATA”). YOU, AS THE USER OF THE SERVICE, ARE RESPONSIBLE FOR THE DATA RECORDED AND STORED BY THE SERVICE. THE SERVICE IS NOT INTENDED TO DIAGNOSE ANY HEALTH CONDITION OR AUTOMATICALLY ALERT HEALTHCARE PROFESSIONALS OR PATIENTS TO POTENTIALLY SERIOUS HEALTH CONDITIONS.



              Please note:

              Flower is a tracking application that uses your data to enable predictive features and track the information you provide within the application.



              Important to know:

              It cannot detect a health condition.

              It cannot identify a health condition.



              If you are not feeling well please consult your doctor.



              Unless you are a consumer located in a jurisdiction that prohibits the exclusive use of arbitration for dispute resolution, these Terms provide that BINDING ARBITRATION will resolve all disputes between you and Flower. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT to assert or defend your rights under this contract, except for matters that may be taken to small claims court. Your rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury, and your claims cannot be brought as a class action. Please review Section 24 (“Dispute Resolution and Arbitration”) for the details regarding your agreement to arbitrate any disputes with Flower.

              Use of the Service. The Service is intended only to allow you to upload and view data and use specific data pertaining to you as made available by the Service. You may not access or use the Service for any other purpose. You may use the Service, including any data presented to you on or by the Service, or otherwise hosted or stored by Flower for you, only for lawful and appropriate purposes on your behalf, and subject to your full compliance with these Terms and any other guidelines and policies applicable to the Service which Flower may post from time to time.

              Eligibility. You must be at least 13 years of age to use the Service. By agreeing to these Terms, you represent and warrant to us that: (a) you are at least 13 years of age; (b) you have not previously been suspended or removed from the Service, and (c) your registration and your use of the Service is in compliance with all applicable laws and regulations in your local jurisdiction. If you are using the Service on behalf of an entity, organization, or company, you represent and warrant that you have the authority to bind that organization to these Terms and you agree to be bound by these Terms on behalf of that organization.

              Accounts and Registration. To access most features of the Service, you must register for an account. When you register for an account, you may be required to provide us with some information about yourself, such as your email address or other contact information. You agree that the information you provide to us is accurate and that you will keep it accurate and up-to-date at all times. When you register, you will be asked to provide a password. You are solely responsible for maintaining the confidentiality of your account and password, and you accept responsibility for all activities that occur under your account. If you have reason to believe that your account is no longer secure, then you must immediately notify us at terms@Flower.com. Your account may automatically expire following any period of inactivity associated with your account in excess of twelve (12) consecutive months.

              Payment. Access to the Service, or to certain features of the Service, may require you to pay fees. Before you pay any fees, you will have an opportunity to review and accept the fees that you will be charged. All fees are non-refundable, to the fullest extent permitted under applicable law. If Flower changes the fees for the Service, including by adding additional fees or charges, Flower will provide you advance notice of those changes. If you do not accept the changes, Flower may discontinue providing the Service to you. Flower will charge the payment method you specify at the time of purchase. You authorize Flower to charge all sums as described in these Terms, for the Service you select, to that payment method. If you pay any fees with a credit card, Flower may seek pre-authorization of your credit card account prior to your purchase to verify that the credit card is valid and has the necessary funds or credit available to cover your purchase. The Service may include functionality for activating, updating or canceling recurring payments for periodic charges. If you activate or update recurring payments through the Service, you authorize Flower to periodically charge, on a going-forward basis and until cancellation of either the recurring payments or your account, all accrued sums on or before the payment due date for the accrued sums. If you use the Service to update or cancel any existing authorized one-time or recurring payment, it may take several business days for the update or cancellation to take effect.

              License. Flower owns and operates the Service. The documents and other information and content available on the Service (the “Site Content“) are protected by copyright and other intellectual property laws throughout the world. All copyright and other proprietary notices on any Site Content must be retained on any copies made thereof. Any unauthorized reproduction, modification, distribution, public display or public performance of any Site Content is strictly prohibited. Flower and its suppliers reserve all rights not granted in these Terms.

              Subject to the restrictions set forth in these Terms, Flower grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install and use the App in object code format on devices that you own or control, solely for use with the Services. By downloading or using our app(s), you:

              Acknowledge that the App is licensed, not sold to you; and

              Acknowledge that third party terms and fees may apply to the use and operation of your device in connection with your use of the App, such as your carrier’s terms of services, and fees for phone service, data access, or messaging capabilities, and that you are solely responsible for payment of any and all such fees.

              User Content

              User Content Generally. Certain features of the Service may permit you, your healthcare provider, or other users to upload content to the Service, including messages, images, data, text, location information, and other types of information (“User Content”) and to publish User Content on the Service. You retain the copyrights, including any moral rights, and any other proprietary rights that you may hold in the User Content that you post to the Service; provided that if you choose to link your account to our Flower service or information systems offered by your healthcare provider, any data provided to your healthcare provider may become part of your health record, and that copy of such data may be owned and/or controlled by your healthcare provider under applicable law.

              Limited License Grant to Flower. By posting or publishing User Content, you grant Flower a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, fully paid, transferable right and license (with the right to sublicense) to use, host, store, transfer, display, perform, reproduce, modify, create derivative works of, and distribute your User Content, in whole or in part, for any purpose in accordance with our Privacy Policy, in any media formats and through any media channels now known or hereafter developed. We may also create anonymized data and images from your User Content, and such data and images will no longer be your User Content. You irrevocably and forever waive any rights you may have regarding your User Content being altered or manipulated in any way that may be objectionable to you. Flower reserves the right to refuse to accept, post, display, or transmit any of your User

              You agree to pay for any and all royalties, fees, or other monies owing any person by reason of User Content you post on or through the Service.

              User Content Disclaimer. We are under no obligation to edit or control User Content that you or other users post or publish, and will not be in any way responsible or liable for User Content. Flower may, however, at any time and without prior notice, screen, remove, edit, or block any User Content that in our sole judgment violates these Terms or is otherwise objectionable. You understand that when using the Service you will be exposed to User Content from a variety of sources and acknowledge that User Content may be inaccurate, offensive, indecent, or objectionable. To the fullest extent allowed under applicable law, you agree to waive, and do waive, any legal or equitable right or remedy you have or may have against Flower with respect to User Content. We expressly disclaim any and all liability in connection with User Content, to the fullest extent allowed under applicable law. If notified by a user or content owner that User Content allegedly does not conform to these Terms, we may investigate the allegation and determine in our sole discretion whether to remove the User Content, which we reserve the right to do at any time and without notice.

              Procedure for Unlawful User Content

              If you believe that any User Content does not conform to these Terms, please notify us.

              We comply with the provisions of the Digital Millennium Copyright Act (the “DMCA”) applicable to our operations (17 U.S.C. §512, as amended). If you have an intellectual property rights-related complaint about material posted on the Service, you may contact our designated agent at the following address:

              Venturit INC.

              325 E. Grand River Ave, Suite 318



              East Lansing, MI 48823



              Please note that under applicable law, if you knowingly give false, misleading or inaccurate information that User Consent is infringing, you may be subject to civil or criminal penalty.

              Any notice under the Digital Millennium Copyright Act (the “DMCA”) alleging that materials hosted by or distributed through the Service infringe intellectual property rights must include all of the information required by the DMCA for such notices.

              Repeat Infringers. Flower will promptly terminate without notice the accounts of users that are determined by Flower to be “Repeat Infringers.” A Repeat Infringer is a user who has been notified of infringing activity or has had User Content removed from the Service at least three times.

              Prohibited Conduct. BY USING THE SERVICE YOU AGREE NOT TO:

              use or access the Service (a) from a jurisdiction where such use or access is not authorized, (b) for any illegal purpose, or (c) in violation of any local, state, national, or international law;

              conduct activities that may be harmful to others or that could damage Flower's reputation;

              violate, or encourage others to violate, any right of a third party, including by infringing or misappropriating any third party intellectual property right, or disclosing personal information about another person;

              post, upload, or distribute marketing or advertising links or content, or any User Content or other content that is unlawful, defamatory, libelous, inaccurate, or that a reasonable person could deem to be objectionable, profane, indecent, pornographic, harassing, threatening, embarrassing, hateful, or otherwise inappropriate;

              use scrapers, robots, or other data gathering devices on or through the Service, or frame or otherwise provide the Service to third parties without Flower's permission;

              interfere with security-related features of the Service, including by: (a) disabling or circumventing features that prevent or limit use or copying of any content; or (b) reverse engineering, decompiling, or otherwise attempting to discover the source code of any portion of the Service, including the app(s), except to the extent that such activity is expressly permitted by applicable law notwithstanding this restriction;

              interfere with the operation of the Service or any user’s enjoyment of the Service, including by: (a) uploading or otherwise disseminating any virus, adware, spyware, worm, or other malicious code; (b) making any unsolicited offer or advertisement to another user of the Service; (c) attempting to collect personal information, including without limitation health information, about another user or third party without their consent; or (d) interfering with or disrupting any network, equipment, or server connected to or used to provide the Service, or violating any regulation, policy, or procedure of any such network, equipment, or server;

              perform any fraudulent activity including impersonating any person or entity, claiming a false affiliation, accessing any other Service or account without permission, or falsifying your account registration information;

              modify, translate, or create derivative works, adaptations or compilations of, or based on, the Service or part thereof, or use, copy or reproduce the Service or any part thereof other than as expressly permitted in these Terms;

              assign, sublicense, lease, sell, grant a security interest in, or otherwise transfer the access granted under these Terms or any Materials (as defined in Section 16) or any right or ability to view, access, or use any Material; or

              attempt to do any of the acts described in this Section 11, or assist or permit any person in engaging in any of the acts described in this Section 11.

              Third-Party Services and Linked Websites. The Site may contain links to other web sites operated by third parties. Such third party web sites are not under the control of Flower and we are not responsible for the content of any third party web site or any link contained in a third party web site. Flower provides these links only as a convenience and does not review, approve, monitor, endorse, warrant, or make any representations with respect to third party web sites.

              Flower may provide tools through the Service that enable you to export information, including without limitation Health Data and User Content, to third party applications or services such as Google Fit or Apple Health, or import information from such third party applications or services, including through features that allow you to link your account on Flower with an account on the third party service. By using one of these tools, you represent, warrant, and agree that such transfers are permitted under applicable law and that you are authorized to, and that we may on your behalf, transfer that information to or from the applicable third-party service. Third party services are not under our control, and we are not responsible for any third party service’s use of your exported information. If you enable the features of the Service that are designed to import information from such third party services, you hereby authorize and grant Flower a perpetual, irrevocable license to use such imported information and disclose it to third parties such as your healthcare professional in accordance with our Privacy Policy and applicable law. The Service may also contain links to third-party websites. Linked websites are not under our control, and we are not responsible for their content.

              Termination of Use; Discontinuation and Modification of the Service. You may terminate your account at any time by following the procedures detailed on the Flower website or contacting customer service at terms@Flower.com. If you violate any provision of these Terms, your permission from us to use the Service will terminate automatically. In addition, Flower may in its sole discretion terminate your user account on the Service or suspend or terminate your access to the Service at any time if you violate any provision of these Terms, if we no longer provide any part of the Services or for any other reason, with or without notice. We also reserve the right to modify or discontinue the Service at any time (including by limiting or discontinuing certain features of the Service), temporarily or permanently, without notice to you. To the fullest extent permitted under applicable law, we will have no liability on account of any change to the Service or any suspension or termination of your access to or use of the Service, provided that if Flower ceases to operate the Service and terminates your access to the Service accordingly, then you will be entitled to a pro-rated refund of any prepaid fees that you have paid to Flower for use of the Service. Upon the termination of your account or this agreement for any reason, Flower may at its option delete any data associated with your account.





              Privacy Policy; Additional Terms

              Privacy Policy. Please read the Flower Privacy Policy carefully for information relating to our collection, use, storage and disclosure of your personal information. The Flower Privacy Policy is incorporated by this reference into, and made a part of, these Terms. You consent to the collection, hosting, use, disclosure and other processing or handling of your personal information (including sharing data with third party providers) as described in the Flower Privacy Policy.

              Additional Terms. Your use of the Service is subject to all additional terms, policies, rules, or guidelines applicable to the Service or certain features of the Service that we may post on or link to from the Service (the “Additional Terms”), such as end-user license agreements for any downloadable software applications, or rules that are applicable to a particular feature or content on the Service, subject to Section 15. All Additional Terms are incorporated by this reference into, and made a part of, these Terms.

              Modifications to these Terms. We reserve the right, at our discretion, to change these Terms on a going-forward basis at any time. Please check these Terms periodically for changes. If a change to these Terms materially modifies your rights or obligations, we will notify you of the modified Terms by email to the address you provided in your user profile and/or in a notification in the Service or on our website. Material modifications will be effective upon your acceptance of such modified Terms or upon your continued use of the Service after we send or post our notification of the changes, whichever is earlier. Immaterial modifications are effective upon publication. Disputes arising under these Terms will be resolved in accordance with the version of these Terms that was in effect at the time the dispute arose. Your sole and exclusive remedy if you do not agree with any modification to these Terms is to cancel your account. You may not amend or modify these Terms under any circumstances.

              Ownership; Proprietary Rights. The Service is owned and operated by Flower. The visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the Service (“Materials”) provided by Flower are protected by intellectual property and other laws. All Materials included in the Service are the property of Flower or our third-party licensors. Except as expressly authorized by Flower, you may not make use of the Materials. Flower reserves all rights to the Materials not granted expressly in these Terms.

              Subcontractors. You hereby consent to Flower's engagement of third parties (including Flower's affiliates) to perform or support the performance of, all or any portion of the Service or the Flower website, such as the clinical interpretation service.

              Feedback. If you choose to provide input and suggestions regarding problems with or proposed modifications or improvements to the Service (“Feedback”), then you hereby grant Flower an unrestricted, perpetual, irrevocable, non-exclusive, fully-paid, royalty-free right to exploit the Feedback in any manner and for any purpose, including to improve the Service and create other products and services.

              Indemnity. To the fullest extent permitted under applicable law, you are responsible for your use of the Service, and you will indemnify, hold harmless, and, if so directed by Flower, defend Flower and its officers, directors, employees, consultants, affiliates, subsidiaries and agents (together, the “Flower Entities”) from and against every claim, liability, damage, loss, and expense, including reasonable attorneys’ fees and costs, arising out of or in any way connected with: (a) your access to, use of, or alleged use of, the Service; (b) your violation of any portion of these Terms, any representation, warranty, or agreement referenced in these Terms, or any applicable law or regulation; (c) your violation of any third-party right, including any intellectual property right or publicity, confidentiality, other property, or privacy right; (d) any dispute or issue between you and any third party; and (e) all claims arising from or alleging fraud, intentional misconduct, criminal acts, or gross negligence committed by you. To the fullest extent permitted under applicable law, we reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (without limiting your indemnification obligations with respect to that matter), and in that case, you agree to cooperate with our defense of that claim. Disclaimers; No Warranties

              THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SERVICE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS, WITHOUT WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE Flower ENTITIES DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, RELATING TO THE SERVICE, ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SERVICE, AND ANY SOFTWARE OR HARDWARE ASSOCIATED OR USED WITH THE SERVICE, OR THE AVAILABILITY OF ANY OF THE FOREGOING, INCLUDING: (A) ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT; (B) ANY WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE; AND (C) ANY WARRANTY AS TO WHETHER THE OTHER INFORMATION AVAILABLE ON OR TRANSMITTED BY THE SERVICE IS TRUE, COMPLETE OR ACCURATE. YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT Flower IS NOT RESPONSIBLE FOR ANY HEALTHCARE OR RELATED DECISIONS MADE BY YOU OR YOUR HEALTHCARE PROFESSIONAL BASED UPON DATA COLLECTED, TRANSMITTED OR DISPLAYED BY OR ON THE SERVICE, WHETHER SUCH DATA IS ACCURATE OR INACCURATE. THE Flower ENTITIES DO NOT WARRANT THAT THE SERVICE OR ANY PORTION OF THE SERVICE, OR ANY MATERIALS OR CONTENT OFFERED THROUGH THE SERVICE, WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND DO NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED.

              NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE SERVICE OR ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICE WILL CREATE ANY WARRANTY REGARDING ANY OF THE Flower ENTITIES OR THE SERVICE THAT IS NOT EXPRESSLY STATED IN THESE TERMS. YOU ASSUME ALL RISK FOR ANY DAMAGE THAT MAY RESULT FROM YOUR USE OF OR ACCESS TO THE SERVICE, YOUR DEALING WITH ANY OTHER SERVICE USER, AND ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICE. YOU UNDERSTAND AND AGREE THAT YOU USE THE SERVICE, AND USE, ACCESS, DOWNLOAD, OR OTHERWISE OBTAIN MATERIALS OR CONTENT THROUGH THE SERVICE AND ANY ASSOCIATED SITES OR SERVICES, AT YOUR OWN DISCRETION AND RISK, AND THAT YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE USED IN CONNECTION WITH THE SERVICE), OR THE LOSS OF DATA THAT RESULTS FROM THE USE OF THE SERVICE OR THE DOWNLOAD OR USE OF THAT MATERIAL OR CONTENT.

              THE ABOVE PARAGRAPHS APPLY TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW. SOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER OF WARRANTIES, IN PARTICULAR A DISCLAIMER OF WARRANTIES PROVIDED OR IMPLIED BY LAW, SUCH AS LEGAL GUARANTEES OF CONFORMITY FOR GOODS OFFERED TO CONSUMERS IN THE EU, AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION.

              Limitation of Liability

              IN NO EVENT WILL THE Flower ENTITIES BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SERVICE OR ANY MATERIALS OR CONTENT ON THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ANY Flower ENTITY HAS BEEN INFORMED OF THE POSSIBILITY OF DAMAGE. FOR THE AVOIDANCE OF DOUBT, THE EXCLUDED DAMAGES ALSO INCLUDE WITHOUT LIMITATION, LOSS OF SAVINGS OR REVENUE; LOSS OF PROFIT; LOSS OF USE; LOSS OF LIFE OR HEALTH, THE CLAIMS OF THIRD PARTIES; AND ANY COST OF ANY SUBSTITUTE EQUIPMENT OR SERVICES.

              EXCEPT AS PROVIDED IN SECTION 24.4, IF Flower CANNOT LAWFULLY DISCLAIM LIABILITY FOR ANY OF THE FOREGOING DAMAGES, THEN THE AGGREGATE LIABILITY OF THE Flower ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY INABILITY TO USE ANY PORTION OF THE SERVICE OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO THE GREATER OF THE AMOUNTS YOU HAVE PAID TO USE THE SERVICE OR $100, TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW.

              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN WHICH CASE SUCH LIMITATIONS SHALL APPLY TO YOU TO THE EXTENT PERMITTED IN SUCH JURISDICTION. Furthermore, nothing in these Terms limits or excludes any liability that cannot be limited or excluded by law, SUCH AS LIABILITY FOR INTENTIONAL VIOLATION OF THESE TERMS. NOTHING IN THESE TERMS AFFECTS YOUR LEGAL RIGHTS AS A CONSUMER.

              EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE LIMITATIONS IN THIS SECTION 20 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.

              Force Majeure. Flower will be excused from performance under these Terms for any period that it is prevented from or delayed in performing any obligations pursuant to these Terms, in whole or in part, as a result of a Force Majeure Event. To the fullest extent permitted under applicable law, for purposes of this section, “Force Majeure Event” means an event or series of events caused by or resulting from any of the following: (1) weather conditions or other elements of nature or acts of God; (2) acts of war, acts of terrorism, insurrection, riots, civil disorders or rebellion; (3) quarantines or embargoes, (4) labor strikes; (4) telecommunications, network, computer, server or Internet downtime; (5) unauthorized access to Flower's information technology systems by third parties; or (6) other causes beyond the reasonable control of Flower.

              Governing Law and Competent Courts. To the fullest extent permitted pursuant to applicable law, these Terms are governed by the laws of the State of Michigan without regard to conflict of law principles. If a lawsuit or court proceeding is permitted under these Terms, then you and Flower agree to submit to the personal and exclusive jurisdiction of the state courts and federal courts located within Ingham County, Michigan for the purpose of litigating any dispute. If you are a consumer located in the EU, such jurisdiction of the Ingham County courts will be non-exclusive. We operate the Service from our offices in the United States, and we make no representation that Materials included in the Service are appropriate or available for use in other locations.

              General. These Terms, together with the Privacy Policy and any other agreements expressly incorporated by reference into these Terms, are the entire and exclusive understanding and agreement between you and Flower regarding your use of the Service. Except as expressly permitted above, these Terms may be amended only by a written agreement signed by authorized representatives of all parties to these Terms. You may not assign or transfer these Terms or your rights under these Terms, in whole or in part, by operation of law or otherwise, without our prior written consent, which may be granted or withheld at Flower's sole discretion. Any attempted assignment by you without such consent shall be null and void. We may assign these Terms at any time without notice or consent, to the fullest extent permitted under applicable law. The failure to require performance of any provision will not affect our right to require performance at any other time after that, nor will a waiver by us of any breach or default of these Terms, or any provision of these Terms, be a waiver of any subsequent breach or default or a waiver of the provision itself. Use of section headers in these Terms is for convenience only and will not have any impact on the interpretation of any provision. If any part of these Terms is held to be invalid or unenforceable, the unenforceable part will be given effect to the greatest extent possible, and the remaining parts will remain in full force and effect. Upon termination of these Terms, Sections 2, and 8 through 25, along with the Privacy Policy and any other accompanying agreements, will survive.

              Dispute Resolution and Arbitration

              Generally. To the fullest extent permitted under applicable law and in the interest of resolving disputes between you and Flower in the most expedient and cost effective manner, you and Flower agree that every dispute arising in connection with these Terms will be resolved by binding arbitration, unless you are a consumer located in a jurisdiction that prohibits the exclusive use of arbitration for dispute resolution.

              Arbitration is less formal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or jury, may allow for more limited discovery than in court, and can be subject to very limited review by courts. Arbitrators can award the same damages and relief that a court can award. This agreement to arbitrate disputes includes all claims arising out of or relating to any aspect of these Terms, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim arises during or after the termination of these Terms. YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND Flower ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION, TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW.

              Exceptions. Despite the provisions of Section 24.1, nothing in these Terms will be deemed to waive, preclude, or otherwise limit the right of either party to: (a) bring an individual action in small claims court; (b) pursue an enforcement action through the applicable federal, state, or local agency if that action is available; (c) seek injunctive relief in a court of law; or (d) to file suit in a court of law to address an intellectual property infringement claim.

              Arbitrator. To the fullest extent permitted under applicable law, any arbitration between you and Flower will be settled under the Federal Arbitration Act, and governed by the Commercial Dispute Resolution Procedures and the Supplementary Procedures for Consumer Related Disputes (collectively, “AAA Rules”) of the American Arbitration Association (“AAA”), as modified by these Terms, and will be administered by the AAA. The AAA Rules and filing forms are available online at www.adr.org, by calling the AAA at 1-800-778-7879, or by contacting Flower.

              Notice; Process. A party who intends to seek arbitration must first send a written notice of the dispute to the other party by certified U.S. Mail or by Federal Express (signature required) or, only if such other party has not provided a current physical address, then by electronic mail (“Notice”). Flower's address for Notice is: Venturit, INC.,  325 EAST GRAND RIVER, STE 318, EAST LANSING, MICHIGAN, USA. The Notice must: (a) describe the nature and basis of the claim or dispute; and (b) set forth the specific relief sought (“Demand”). The parties will make good faith efforts to resolve the claim directly, but if the parties do not reach an agreement to do so within 30 days after the Notice is received, you or Flower may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by you or Flower must not be disclosed to the arbitrator until after the arbitrator makes a final decision and award, if any. If the dispute is finally resolved through arbitration in your favor, Flower will pay you the highest of the following: (i) the amount awarded by the arbitrator, if any; (ii) the last written settlement amount offered by Flower in settlement of the dispute prior to the arbitrator’s award; or (iii) $1,000.

              Fees. If you commence arbitration in accordance with these Terms, Flower will reimburse you for your payment of the filing fee, unless your claim is for more than $10,000, in which case the payment of any fees will be decided by the AAA Rules. Any arbitration hearing will take place at a location to be agreed upon in Ingham County, Michigan, but if the claim is for $10,000 or less, you may choose whether the arbitration will be conducted: (a) solely on the basis of documents submitted to the arbitrator; (b) through a non-appearance based telephone hearing; or (c) by an in-person hearing as established by the AAA Rules in the county (or parish) of your billing address. If the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA Rules. In that case, you agree to reimburse Flower for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules. Regardless of the manner in which the arbitration is conducted, the arbitrator must issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within 14 days of the arbitrator’s ruling on the merits.

              No Class Actions. TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, YOU AND Flower AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and Flower agree otherwise, the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a representative or class proceeding, to the fullest extent permissible pursuant to applicable law.

              Claims. To the fullest extent permitted under applicable law, no action arising out of, in connection with, or relating to these Terms shall be brought by you more than one (1) year after the accrual of the cause of action. This period shall not be extended for any reason, except by the written consent of both parties. All statutes or provisions of law which would toll or otherwise affect the running of the period of limitation are hereby waived, and no such statute or provision of law shall operate to extend the period limited in this paragraph, to the fullest extent permitted under applicable law.

              Modifications to this Arbitration Provision. If Flower makes any future change to this arbitration provision, other than a change to Flower's address for Notice, you may reject the change by sending us written notice within 30 days of the change to Flower's address for Notice, in which case your account with Flower will be immediately terminated and this arbitration provision, as in effect immediately prior to the changes you rejected will survive.

              Enforceability. If Section 24.6 is found to be unenforceable or if the entirety of this Section 24 is found to be unenforceable, then the entirety of this Section 24 will be null and void and, in that case, the parties agree that the exclusive jurisdiction and venue described in Section 21 will govern any action arising out of or related to these Terms.

              Notices; Consent to Electronic Communications. By using the Service, you consent to receiving certain electronic communications from us as further described in our Privacy Policy. Please read our Privacy Policy to learn more about our electronic communications practices. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that those communications be in writing. All notices from Flower intended for receipt by You shall be deemed delivered and effective when sent to the email address provided by You during the registration process or when posted to and made available to you on the Service. If you change the email address provided in connection with your registration to access and use the Service, you must update your address in accordance with the procedures set forth on Service. By providing your mobile number to us, you consent to receive text messages at that number as requested for account verification, message notifications, and other purposes related to the Service. While we do not charge a fee for text messages, your carrier may charge standard messaging, data, and other fees. You are responsible for those charges. We may send and receive text messages through cellular telephone operators or other networks, and the level of reliability may vary. We are not responsible for the timeliness or final delivery of the message, as this is outside our control and is the responsibility of the cellular telephone operator or other networks. Notwithstanding the foregoing, we will use your mobile number in accordance with our Privacy Policy.

              NOTICE REGARDING APPLE

              You acknowledge that these Terms are between you and Flower only, not with Apple, and Apple is not responsible for the App and the content thereof. Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App. In the event of any failure of the App to conform to any applicable warranty, then you may notify Apple and Apple will refund the purchase price for the App to you, if any; and, to the maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever with respect to the App. Apple is not responsible for addressing any claims by you or any third party relating to the App or your possession and/or use of the App, including, but not limited to: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation. Apple is not responsible for the investigation, defense, settlement and discharge of any third party claim that the App or your possession and use of the App infringes that third party’s intellectual property rights. You agree to comply with any applicable third party terms, when using the App. Apple, and Apple’s subsidiaries, are third party beneficiaries of these Terms, and upon your acceptance of the Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce the Terms against you as a third party beneficiary of the Terms. You hereby represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.

              Contact Information. The Service is offered by Flower, Inc. You may contact us by emailing us at terms@Flower.com.
            </Text>
          </ScrollView>
        </View>
        <View
          style={{flex: 0.5, marginHorizontal: '10.00%', marginTop: '10.00%'}}>
          <CheckBox
            style={{width: '100%'}}
            onClick={() => {
              this.setState({
                isAgreedTermsAndConditions: !this.state
                  .isAgreedTermsAndConditions,
              });
            }}
            isChecked={this.state.isAgreedTermsAndConditions}
            rightText={'I agree to the Terms and Conditions'}
          />
          <CheckBox
            style={{width: '100%'}}
            onClick={() => {
              this.setState({
                isAgreedPrivacyPolicy: !this.state.isAgreedPrivacyPolicy,
              });
            }}
            isChecked={this.state.isAgreedPrivacyPolicy}
            rightText={'I agree with Flower privacy policy'}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              height: 44,
              width: '46.14%',
              backgroundColor: (this.state.isAgreedPrivacyPolicy && this.state.isAgreedTermsAndConditions) ?  this.props.selectedTheme : 'grey',
              borderRadius: 22,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            disabled={!this.state.isAgreedPrivacyPolicy && !this.state.isAgreedTermsAndConditions}
            onPress={this.onRegister}>
            <Text style={{fontSize: 17, color: '#FFFFFF'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  termsAndConditions: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    fontFamily: 'Nunito',
    color: '#424242',
    display: 'flex',
  },
});

const mapStateToProps = state => ({
  signUpData: state.auth.signUpData,
  signUpSuccess:state.auth.signUpSuccess,
  selectedTheme: state.theme.selectedTheme,

});

export default connect(mapStateToProps)(TermsAndConditions);

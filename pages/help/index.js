import { useState } from 'react';
import Link from "next/link";
import styles from './help.module.css';
import { display, style } from '@mui/system';
const Help = () => {
    
    const [isAccActive, setIsAccActive] = useState();

    const [accrodionFaq, accrodionFaqs] = useState([
        {
             id : 1,
             title : 'How do i get  started with publichub?',
             description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
        },
        {   id : 2, 
            title : 'How do i get  started with publichub?',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
        },
        {   id : 3, 
            title : 'How do i get  started with publichub?',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
        }
    ]
    );

    const accClick = (id) => {
        setIsAccActive(id);
    }


    return (
        <>        
            <div className={styles.banner_help}>
                <div className="pu_container">
                    <h3>How can we help you?</h3>
                </div>
            </div>
            <div className="pu_container">
                <div className={`${styles.help_main} ${styles.help_main_home}`}>
                    <Link href="help/account-settings"><a><span><svg width="35" height="38" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.219482 45.4397V51.602C0.219482 52.2245 0.717436 52.6602 1.33991 52.7225H34.6415C35.264 52.7225 35.6997 52.2245 35.762 51.602V45.4397C35.762 38.0947 30.9068 31.6833 23.873 29.6292C26.0516 28.4465 27.7945 26.5791 28.8526 24.4005C29.7863 25.1475 30.8444 25.7077 31.9027 26.0811V27.4506C31.9027 29.0067 33.1477 30.3139 34.7661 30.3139H37.256C38.8121 30.3139 40.1193 29.069 40.1193 27.4506V26.0811C41.3642 25.6454 42.4847 24.9607 43.5428 24.1514L44.7255 24.8362C46.095 25.5832 47.8379 25.1474 48.5848 23.778L49.8297 21.6617C50.639 20.2922 50.1409 18.5493 48.7715 17.7402L47.5889 17.0554C47.7134 16.433 47.7756 15.7482 47.7756 15.1258C47.7756 14.5033 47.7134 13.8186 47.5889 13.1961L48.7715 12.5114C50.141 11.7644 50.639 10.0215 49.8297 8.65212C49.7674 8.58986 49.5807 8.27868 48.5848 6.53578C47.7755 5.16631 46.0949 4.73062 44.7255 5.47762L43.5428 6.16235C42.5469 5.3531 41.3642 4.66849 40.1193 4.23267V2.86333C40.1193 1.30721 38.8743 0 37.256 0H34.7661C33.2099 0 31.9027 1.24495 31.9027 2.86333V4.2328C30.6578 4.66849 29.5374 5.35322 28.4792 6.16248L27.2965 5.47774C25.927 4.73075 24.1841 5.16657 23.4373 6.53591L22.5659 8.02977C21.1343 7.4073 19.578 7.15838 18.0219 7.15838C11.4239 7.15838 6.0084 12.4493 6.0084 19.0474C6.0084 23.4046 8.37377 27.4506 12.1707 29.5669C5.07475 31.621 0.219482 38.0947 0.219482 45.4397ZM25.2424 7.65634C25.4292 7.34516 25.8027 7.22064 26.1761 7.4073L28.0435 8.46546C28.4792 8.7145 28.9772 8.65224 29.3507 8.34094C30.4711 7.28278 31.7784 6.53578 33.2722 6.10009C33.7079 5.97557 34.0815 5.53988 34.0815 5.04192V2.92559C34.0815 2.55216 34.3926 2.24085 34.7662 2.24085H37.2561C37.6295 2.24085 37.9408 2.55203 37.9408 2.92559V5.04192C37.9408 5.53988 38.252 5.97557 38.7501 6.10009C40.1817 6.53578 41.5512 7.28278 42.6716 8.34094C43.045 8.65212 43.543 8.71438 43.9788 8.46546L45.8462 7.4073C46.1574 7.22052 46.5932 7.34504 46.7799 7.65634L48.0245 9.77267C48.2113 10.0838 48.0868 10.5197 47.7755 10.6441L45.9081 11.7022C45.4724 11.9513 45.2856 12.4492 45.4101 12.8849C45.7836 14.3788 45.7836 15.8728 45.4101 17.3666C45.2856 17.8646 45.5347 18.3625 45.9081 18.5493L47.7755 19.6075C48.0867 19.7943 48.2112 20.1677 48.0245 20.5411L46.7796 22.6575C46.5928 22.9686 46.2194 23.0931 45.9082 22.9065L44.0408 21.8483C43.6051 21.5993 43.1071 21.6615 42.7336 21.9729C41.6132 23.031 40.3059 23.778 38.8121 24.2137C38.3141 24.3382 38.0028 24.7739 38.0028 25.2719V27.3882C38.0028 27.7616 37.6917 28.0729 37.3181 28.0729H34.8282C34.4548 28.0729 34.1435 27.7618 34.1435 27.3882V25.2719C34.1435 24.7739 33.8323 24.3382 33.3342 24.2137C31.9647 23.8403 30.7199 23.1555 29.6616 22.2219C29.9107 21.226 30.0351 20.0433 30.0351 19.1718C30.0351 14.939 27.7942 11.2043 24.4952 9.08794L25.2424 7.65634ZM8.12473 19.1095C8.12473 13.6942 12.5442 9.33685 17.9597 9.33685C23.3751 9.33685 27.7946 13.7563 27.7946 19.1095C27.7946 24.2137 23.9354 28.9445 17.8974 28.9445C12.5442 28.9445 8.12473 24.525 8.12473 19.1095V19.1095ZM16.7147 31.123C16.8392 31.123 19.329 31.123 19.2046 31.123C27.1099 31.123 33.5213 37.5344 33.5213 45.4397V50.4816H2.39808V45.4397C2.39808 37.5344 8.80947 31.123 16.7147 31.123V31.123Z" fill="#F9913A"/><path d="M35.9487 21.226C39.31 21.226 41.9865 18.4872 41.9865 15.1259C41.9865 11.7646 39.2477 9.08807 35.8865 9.08807C32.5252 9.08807 29.8486 11.8269 29.8486 15.1882C29.8486 18.4871 32.5874 21.226 35.9487 21.226ZM35.9487 11.2665C38.1273 11.2665 39.808 13.0717 39.808 15.188C39.808 17.3666 38.0028 19.0473 35.8865 19.0473C33.7701 19.0473 32.0272 17.3044 32.0272 15.1258C32.0272 12.9472 33.7701 11.2043 35.9487 11.2665V11.2665Z" fill="#F9913A"/></svg></span> <span>Account Settings</span> </a></Link>

                    <Link href="help/editing-and-designing"><a><span><svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.4229 17.3435C31.7757 17.3435 31.251 17.8682 31.251 18.5154V35.7035C31.251 36.7804 30.3748 37.6566 29.2978 37.6566H4.29701C3.22002 37.6566 2.34382 36.7804 2.34382 35.7035V10.7027C2.34382 9.62566 3.22002 8.74946 4.29701 8.74946H21.4851C22.1323 8.74946 22.657 8.22476 22.657 7.57755C22.657 6.93034 22.1323 6.40564 21.4851 6.40564H4.29701C1.92764 6.40564 0 8.33328 0 10.7027V35.7035C0 38.0728 1.92764 40.0005 4.29701 40.0005H29.2978C31.6672 40.0005 33.5948 38.0728 33.5948 35.7035V18.5154C33.5948 17.8682 33.0701 17.3435 32.4229 17.3435V17.3435Z" fill="#F9913A"/><path d="M39.2004 3.00992L36.9906 0.800084C35.9245 -0.266044 34.1898 -0.266044 33.1235 0.800084L15.4453 18.4783C15.2817 18.6419 15.1703 18.8503 15.1248 19.0772L14.0198 24.6016C13.943 24.9859 14.0633 25.3831 14.3404 25.6601C14.5623 25.8821 14.8613 26.0034 15.169 26.0034C15.2455 26.0034 15.3224 25.9959 15.3988 25.9807L20.9233 24.8757C21.1501 24.8303 21.3585 24.7187 21.5221 24.5551L39.2004 6.877C39.2004 6.877 39.2005 6.877 39.2005 6.87692C40.2665 5.81087 40.2665 4.07613 39.2004 3.00992V3.00992ZM20.1157 22.647L16.663 23.3376L17.3536 19.8848L31.7423 5.49586L34.5046 8.25814L20.1157 22.647ZM37.5431 5.21968L36.1619 6.60082L33.3997 3.83854L34.7807 2.45748C34.9331 2.30513 35.1809 2.30505 35.3332 2.4574L37.543 4.66724C37.6954 4.81951 37.6954 5.06741 37.5431 5.21968Z" fill="#F9913A"/></svg></span> <span>Editing And Designing</span> </a></Link>
                    
                    <Link href="help/pixaurl-settings"><a><span><svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_124)">
                            <path d="M19.2682 21.6054C18.9528 21.4159 18.6291 21.2253 18.3054 21.0385C18.3815 20.3899 18.3816 19.7338 18.3057 19.0864C18.6307 18.8989 18.9542 18.7085 19.2681 18.5198C19.7966 18.2022 20.0169 17.5321 19.7805 16.961C19.7805 16.961 19.7805 16.961 19.7804 16.9609L19.0907 15.2958C18.8541 14.7249 18.2248 14.4067 17.6263 14.5558C17.2705 14.6443 16.9071 14.7385 16.5449 14.8356C16.1405 14.324 15.6765 13.8601 15.1643 13.4555C15.2614 13.0933 15.3556 12.7297 15.4442 12.3738C15.5933 11.7755 15.2752 11.146 14.7042 10.9094L13.0391 10.2197C12.4682 9.98314 11.7979 10.2033 11.4802 10.7319C11.291 11.0468 11.1004 11.3705 10.9134 11.6948C10.2649 11.6187 9.60893 11.6185 8.96129 11.6944C8.77367 11.3691 8.58318 11.0455 8.39469 10.7319C8.07687 10.2034 7.4068 9.9832 6.8358 10.2197L5.17068 10.9094C4.59986 11.1459 4.28158 11.7755 4.4307 12.3738C4.51947 12.7304 4.61357 13.0939 4.71055 13.4552C4.19896 13.8594 3.73502 14.3235 3.33049 14.8358C2.96744 14.7384 2.60381 14.6443 2.24867 14.5558C1.65019 14.4066 1.02078 14.725 0.784238 15.2959L0.0946479 16.9609C-0.141778 17.5319 0.078476 18.2021 0.606874 18.5197C0.921816 18.7089 1.24555 18.8995 1.56975 19.0866C1.49369 19.735 1.49352 20.391 1.56939 21.0387C1.2449 21.2259 0.921347 21.4164 0.606757 21.6054C0.0783588 21.923 -0.141895 22.5931 0.0945893 23.1642L0.784355 24.8293C1.02084 25.4001 1.65008 25.7185 2.24879 25.5693C2.6041 25.4808 2.96762 25.3867 3.33002 25.2895C3.73437 25.801 4.19838 26.2649 4.71066 26.6695C4.6134 27.0322 4.51924 27.3958 4.4307 27.7512C4.28158 28.3495 4.59975 28.9791 5.17068 29.2156L6.83586 29.9054C6.99055 29.9694 7.15244 30 7.31264 30C7.744 30 8.16307 29.7786 8.39492 29.3933C8.58271 29.0808 8.7732 28.7572 8.96176 28.4304C9.6101 28.5064 10.2663 28.5066 10.9139 28.4308C11.1001 28.7538 11.2906 29.0773 11.4805 29.3933C11.7982 29.9218 12.4682 30.142 13.0394 29.9055L14.7045 29.2158C15.2753 28.9793 15.5936 28.3497 15.4445 27.7514C15.3564 27.3979 15.2623 27.0344 15.1646 26.67C15.6761 26.2658 16.1401 25.8017 16.5447 25.2895C16.9067 25.3866 17.2704 25.4807 17.6264 25.5694C18.2247 25.7186 18.8543 25.4004 19.0908 24.8293L19.7805 23.1642C20.0169 22.5932 19.7966 21.923 19.2682 21.6054ZM17.8779 24.2481C17.5359 24.1624 17.1873 24.0718 16.8406 23.9784C16.3498 23.8464 15.8319 24.019 15.5212 24.4183C15.164 24.8771 14.7506 25.2905 14.2926 25.6472C13.8937 25.9578 13.7214 26.4756 13.8535 26.9661C13.9474 27.3149 14.038 27.6633 14.1231 28.0029L12.5925 28.6369C12.4105 28.3331 12.2282 28.0227 12.05 27.7131C11.7965 27.2729 11.3085 27.0289 10.8069 27.091C10.2308 27.1625 9.64613 27.1625 9.06934 27.0907C8.56631 27.0282 8.07875 27.2722 7.82527 27.7126C7.64492 28.0257 7.46258 28.3363 7.28252 28.6368L5.75193 28.0028C5.83754 27.6614 5.92812 27.3128 6.02164 26.9657C6.15377 26.4749 5.98109 25.957 5.58178 25.6461C5.12299 25.289 4.70961 24.8757 4.35289 24.4177C4.04234 24.0187 3.52461 23.8465 3.03394 23.9785C2.68689 24.072 2.33844 24.1626 1.99713 24.2481L1.36314 22.7176C1.66549 22.5363 1.97598 22.354 2.28687 22.175C2.72721 21.9215 2.97143 21.4336 2.90908 20.932C2.83742 20.3559 2.8376 19.7712 2.90926 19.1944C2.97184 18.6922 2.72779 18.2038 2.28723 17.9502C1.97644 17.7713 1.6659 17.589 1.36309 17.4074L1.99707 15.8768C2.33809 15.9623 2.6866 16.0529 3.0343 16.1465C3.52484 16.2787 4.04281 16.1059 4.35383 15.7066C4.71096 15.2478 5.12434 14.8344 5.58225 14.4778C5.98115 14.1672 6.15348 13.6494 6.02135 13.1587C5.92818 12.8128 5.8376 12.4644 5.75176 12.122L7.28234 11.4881C7.46305 11.7896 7.64539 12.1 7.82486 12.4118C8.07846 12.8521 8.56684 13.0967 9.06799 13.0339C9.64379 12.9623 10.2284 12.9623 10.8057 13.0342C11.3081 13.0968 11.7962 12.8525 12.0497 12.4121C12.2286 12.1014 12.411 11.7908 12.5924 11.4881L14.123 12.122C14.0373 12.4638 13.9467 12.8123 13.8533 13.1593C13.7212 13.6499 13.8938 14.1679 14.2931 14.4787C14.7519 14.8359 15.1653 15.2492 15.522 15.7072C15.8326 16.106 16.3501 16.2783 16.841 16.1463C17.1879 16.0529 17.5363 15.9623 17.8778 15.8767L18.5117 17.4072C18.2098 17.5882 17.8994 17.7705 17.588 17.9498C17.1477 18.2033 16.9034 18.6912 16.9658 19.1929C17.0374 19.7687 17.0373 20.3534 16.9655 20.9306C16.903 21.4328 17.1472 21.9211 17.5876 22.1746C17.8979 22.3533 18.2084 22.5356 18.5117 22.7174L17.8779 24.2481Z" fill="#F9913A"/>
                            <path d="M14.1657 18.3112C14.1657 18.3112 14.1657 18.3112 14.1657 18.3111C13.2001 15.9797 10.5179 14.8686 8.18614 15.8343C5.85481 16.8 4.74364 19.4825 5.70938 21.8138C6.17714 22.9433 7.05686 23.8229 8.1862 24.2907C8.75087 24.5246 9.34419 24.6415 9.93751 24.6415C10.5308 24.6415 11.1241 24.5246 11.6889 24.2907C14.0203 23.325 15.1314 20.6426 14.1657 18.3112ZM11.175 23.0501C10.3771 23.3806 9.49823 23.3805 8.70007 23.0501C7.90214 22.7195 7.28063 22.098 6.95005 21.3C6.2676 19.6527 7.05276 17.7573 8.70012 17.075C9.10354 16.9078 9.52167 16.8287 9.93335 16.8287C11.2029 16.8287 12.4098 17.5811 12.9251 18.825C13.6075 20.4723 12.8223 22.3677 11.175 23.0501Z" fill="#F9913A"/>
                            <path d="M29.0949 5.91422C28.8631 5.87953 28.625 5.84584 28.3853 5.81385C28.2644 5.41207 28.1031 5.02254 27.904 4.65258C28.0507 4.46068 28.1953 4.26844 28.3351 4.07959C28.6453 3.66 28.6004 3.06492 28.2308 2.69543L27.3045 1.7693C26.9348 1.39957 26.3398 1.35475 25.9203 1.66512C25.7308 1.80533 25.5386 1.94988 25.3473 2.09607C24.9774 1.89697 24.5879 1.73561 24.186 1.61473C24.154 1.37496 24.1204 1.13689 24.0857 0.905156C24.0085 0.38918 23.5561 0 23.0333 0H21.7234C21.2006 0 20.7482 0.38918 20.671 0.905098C20.6364 1.13672 20.6027 1.37484 20.5707 1.61467C20.1688 1.73555 19.7793 1.89691 19.4094 2.09602C19.2182 1.94977 19.0259 1.80516 18.8365 1.66506C18.4169 1.35469 17.8218 1.39951 17.4523 1.76918L16.5261 2.69525C16.1564 3.06486 16.1115 3.66 16.4218 4.07965C16.5615 4.26844 16.7061 4.46074 16.8527 4.65258C16.6537 5.02248 16.4923 5.41195 16.3714 5.81385C16.1317 5.8459 15.8936 5.87953 15.6619 5.91422C15.1458 5.99145 14.7567 6.44385 14.7567 6.96668V8.27654C14.7567 8.79932 15.1457 9.25178 15.6618 9.329C15.8935 9.36369 16.1316 9.39738 16.3714 9.42937C16.4923 9.83121 16.6536 10.2207 16.8527 10.5906C16.7061 10.7824 16.5615 10.9746 16.4216 11.1636C16.1114 11.5831 16.1562 12.1783 16.5259 12.5477L17.4521 13.474C17.8218 13.8437 18.4168 13.8885 18.8364 13.5782C19.0259 13.4381 19.218 13.2934 19.4093 13.1473C19.7793 13.3464 20.1688 13.5077 20.5706 13.6286C20.6026 13.8683 20.6362 14.1064 20.6709 14.3382C20.7482 14.8542 21.2006 15.2433 21.7234 15.2433H23.0333C23.5561 15.2433 24.0085 14.8543 24.0857 14.3381C24.1203 14.1063 24.154 13.8683 24.186 13.6285C24.5879 13.5077 24.9773 13.3463 25.3473 13.1471C25.5385 13.2934 25.7308 13.438 25.9202 13.5782C26.3397 13.8885 26.9349 13.8437 27.3044 13.474L28.2307 12.5479C28.6004 12.1783 28.6452 11.5832 28.3349 11.1636C28.1951 10.9746 28.0505 10.7822 27.904 10.5907C28.103 10.2208 28.2644 9.83139 28.3853 9.42943C28.625 9.39738 28.8631 9.36375 29.0948 9.32906C29.6109 9.25184 30.0001 8.79943 30.0001 8.2766V6.96674C30 6.44391 29.6109 5.99145 29.0949 5.91422ZM28.7243 8.09426C28.5138 8.12479 28.2991 8.15443 28.0836 8.1825C27.6575 8.23811 27.3086 8.54057 27.1951 8.95295C27.0862 9.34781 26.9283 9.72885 26.7258 10.0854C26.5142 10.4577 26.5468 10.9184 26.8089 11.2592C26.941 11.431 27.0721 11.6039 27.1997 11.7748L26.5315 12.443C26.3601 12.3151 26.1872 12.1841 26.0157 12.0523C25.6751 11.7901 25.2143 11.7577 24.842 11.969C24.4853 12.1716 24.1043 12.3295 23.7097 12.4383C23.297 12.552 22.9946 12.9009 22.9392 13.3269C22.9111 13.5424 22.8815 13.7572 22.8509 13.9676H21.9058C21.8753 13.7572 21.8457 13.5424 21.8176 13.3271C21.7619 12.9009 21.4595 12.5521 21.047 12.4384C20.6523 12.3296 20.2714 12.1717 19.9146 11.9691C19.5423 11.7576 19.0815 11.7901 18.7409 12.0523C18.5694 12.1842 18.3966 12.3151 18.2251 12.443L17.5569 11.7748C17.6845 11.6037 17.8155 11.4309 17.9478 11.259C18.2097 10.9182 18.2423 10.4576 18.0308 10.0853C17.8283 9.72873 17.6703 9.34764 17.5615 8.95289C17.4479 8.54039 17.0991 8.23799 16.673 8.18238C16.4575 8.15426 16.2427 8.12473 16.0322 8.09408V7.14908C16.2427 7.11855 16.4575 7.08891 16.6729 7.06084C17.0991 7.00523 17.4479 6.70277 17.5615 6.29039C17.6703 5.89559 17.8281 5.51455 18.0308 5.15789C18.2423 4.78564 18.2097 4.32492 17.9477 3.9842C17.8154 3.81217 17.6843 3.63932 17.5569 3.46857L18.2251 2.80031C18.3965 2.92822 18.5693 3.05924 18.7407 3.19102C19.0813 3.45322 19.542 3.48592 19.9146 3.27434C20.2711 3.07178 20.6522 2.91387 21.0469 2.805C21.4595 2.69133 21.762 2.34246 21.8174 1.91643C21.8456 1.70098 21.8752 1.48623 21.9057 1.27576H22.8509C22.8814 1.48617 22.911 1.70092 22.939 1.91625C22.9946 2.34246 23.2971 2.69133 23.7095 2.80494C24.1043 2.91375 24.4854 3.07172 24.842 3.27428C25.2144 3.48586 25.6751 3.45299 26.0157 3.19107C26.1872 3.05924 26.36 2.92822 26.5315 2.80031L27.1997 3.46857C27.0722 3.63937 26.9412 3.81229 26.8089 3.98438C26.5469 4.32504 26.5143 4.7857 26.7257 5.15795C26.9283 5.51467 27.0862 5.89576 27.195 6.29045C27.3086 6.70295 27.6574 7.00535 28.0836 7.06096C28.299 7.08908 28.5138 7.11867 28.7243 7.14926V8.09426Z" fill="#F9913A"/>
                            <path d="M22.3784 4.90283C20.8792 4.90283 19.6595 6.12246 19.6595 7.62164C19.6595 9.12088 20.8792 10.3405 22.3784 10.3405C23.8775 10.3405 25.0972 9.12088 25.0972 7.62164C25.0972 6.12246 23.8775 4.90283 22.3784 4.90283ZM22.3784 9.13189C21.5457 9.13189 20.8681 8.45437 20.8681 7.62158C20.8681 6.78879 21.5456 6.11133 22.3784 6.11133C23.2111 6.11133 23.8885 6.78885 23.8886 7.62158C23.8886 8.45437 23.2111 9.13189 22.3784 9.13189Z" fill="#F9913A"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2_124">
                            <rect width="30" height="30" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg></span> 
                    <span>PixaURL Settings</span></a></Link>
                    
                    <Link href="help/setup-pixaurl"><a><span> <svg width="35" height="35" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66717 8.33392C7.16166 8.33392 7.64505 8.18729 8.0562 7.91257C8.46735 7.63784 8.78781 7.24737 8.97704 6.79052C9.16628 6.33367 9.21579 5.83097 9.11932 5.34598C9.02285 4.86099 8.78473 4.4155 8.43507 4.06584C8.08541 3.71619 7.63992 3.47807 7.15494 3.3816C6.66995 3.28513 6.16724 3.33464 5.7104 3.52387C5.25355 3.71311 4.86307 4.03356 4.58835 4.44471C4.31363 4.85587 4.16699 5.33925 4.16699 5.83374C4.16699 6.49683 4.4304 7.13276 4.89928 7.60164C5.36815 8.07051 6.00409 8.33392 6.66717 8.33392V8.33392ZM6.66717 5.00035C6.832 5.00035 6.99313 5.04922 7.13018 5.1408C7.26723 5.23237 7.37405 5.36253 7.43713 5.51481C7.50021 5.6671 7.51671 5.83467 7.48456 5.99633C7.4524 6.15799 7.37303 6.30649 7.25647 6.42304C7.13992 6.53959 6.99142 6.61896 6.82976 6.65112C6.6681 6.68328 6.50053 6.66677 6.34825 6.6037C6.19597 6.54062 6.06581 6.4338 5.97423 6.29675C5.88266 6.1597 5.83378 5.99857 5.83378 5.83374C5.83378 5.61271 5.92158 5.40073 6.07788 5.24444C6.23417 5.08815 6.44614 5.00035 6.66717 5.00035V5.00035Z" fill="#F9913A"/><path d="M13.3343 8.33392C13.8288 8.33392 14.3122 8.18729 14.7234 7.91257C15.1345 7.63784 15.455 7.24737 15.6442 6.79052C15.8335 6.33367 15.883 5.83097 15.7865 5.34598C15.69 4.86099 15.4519 4.4155 15.1022 4.06584C14.7526 3.71619 14.3071 3.47807 13.8221 3.3816C13.3371 3.28513 12.8344 3.33464 12.3776 3.52387C11.9207 3.71311 11.5302 4.03356 11.2555 4.44471C10.9808 4.85587 10.8342 5.33925 10.8342 5.83374C10.8342 6.49683 11.0976 7.13276 11.5665 7.60164C12.0353 8.07051 12.6713 8.33392 13.3343 8.33392V8.33392ZM13.3343 5.00035C13.4992 5.00035 13.6603 5.04922 13.7974 5.1408C13.9344 5.23237 14.0412 5.36253 14.1043 5.51481C14.1674 5.6671 14.1839 5.83467 14.1517 5.99633C14.1196 6.15799 14.0402 6.30649 13.9236 6.42304C13.8071 6.53959 13.6586 6.61896 13.4969 6.65112C13.3353 6.68328 13.1677 6.66677 13.0154 6.6037C12.8631 6.54062 12.733 6.4338 12.6414 6.29675C12.5498 6.1597 12.501 5.99857 12.501 5.83374C12.501 5.61271 12.5888 5.40073 12.7451 5.24444C12.9013 5.08815 13.1133 5.00035 13.3343 5.00035V5.00035Z" fill="#F9913A"/><path d="M6.66717 18.3347C7.16166 18.3347 7.64505 18.1881 8.0562 17.9134C8.46735 17.6386 8.78781 17.2482 8.97704 16.7913C9.16628 16.3345 9.21579 15.8318 9.11932 15.3468C9.02285 14.8618 8.78473 14.4163 8.43507 14.0666C8.08541 13.717 7.63992 13.4789 7.15494 13.3824C6.66995 13.2859 6.16724 13.3354 5.7104 13.5247C5.25355 13.7139 4.86307 14.0344 4.58835 14.4455C4.31363 14.8567 4.16699 15.34 4.16699 15.8345C4.16699 16.4976 4.4304 17.1336 4.89928 17.6024C5.36815 18.0713 6.00409 18.3347 6.66717 18.3347ZM6.66717 15.0011C6.832 15.0011 6.99313 15.05 7.13018 15.1416C7.26723 15.2332 7.37405 15.3633 7.43713 15.5156C7.50021 15.6679 7.51671 15.8355 7.48456 15.9971C7.4524 16.1588 7.37303 16.3073 7.25647 16.4238C7.13992 16.5404 6.99142 16.6198 6.82976 16.6519C6.6681 16.6841 6.50053 16.6676 6.34825 16.6045C6.19597 16.5414 6.06581 16.4346 5.97423 16.2975C5.88266 16.1605 5.83378 15.9994 5.83378 15.8345C5.83378 15.6135 5.92158 15.4015 6.07788 15.2452C6.23417 15.0889 6.44614 15.0011 6.66717 15.0011Z" fill="#F9913A"/><path d="M13.3343 18.3347C13.8288 18.3347 14.3122 18.1881 14.7234 17.9134C15.1345 17.6386 15.455 17.2482 15.6442 16.7913C15.8335 16.3345 15.883 15.8318 15.7865 15.3468C15.69 14.8618 15.4519 14.4163 15.1022 14.0666C14.7526 13.717 14.3071 13.4789 13.8221 13.3824C13.3371 13.2859 12.8344 13.3354 12.3776 13.5247C11.9207 13.7139 11.5302 14.0344 11.2555 14.4455C10.9808 14.8567 10.8342 15.34 10.8342 15.8345C10.8342 16.4976 11.0976 17.1336 11.5665 17.6024C12.0353 18.0713 12.6713 18.3347 13.3343 18.3347ZM13.3343 15.0011C13.4992 15.0011 13.6603 15.05 13.7974 15.1416C13.9344 15.2332 14.0412 15.3633 14.1043 15.5156C14.1674 15.6679 14.1839 15.8355 14.1517 15.9971C14.1196 16.1588 14.0402 16.3073 13.9236 16.4238C13.8071 16.5404 13.6586 16.6198 13.4969 16.6519C13.3353 16.6841 13.1677 16.6676 13.0154 16.6045C12.8631 16.5414 12.733 16.4346 12.6414 16.2975C12.5498 16.1605 12.501 15.9994 12.501 15.8345C12.501 15.6135 12.5888 15.4015 12.7451 15.2452C12.9013 15.0889 13.1133 15.0011 13.3343 15.0011V15.0011Z" fill="#F9913A"/><path d="M6.66717 28.3354C7.16166 28.3354 7.64505 28.1888 8.0562 27.9141C8.46735 27.6394 8.78781 27.2489 8.97704 26.792C9.16628 26.3352 9.21579 25.8325 9.11932 25.3475C9.02285 24.8625 8.78473 24.417 8.43507 24.0674C8.08541 23.7177 7.63992 23.4796 7.15494 23.3831C6.66995 23.2867 6.16724 23.3362 5.7104 23.5254C5.25355 23.7146 4.86307 24.0351 4.58835 24.4462C4.31363 24.8574 4.16699 25.3408 4.16699 25.8353C4.16699 26.4984 4.4304 27.1343 4.89928 27.6032C5.36815 28.072 6.00409 28.3354 6.66717 28.3354V28.3354ZM6.66717 25.0019C6.832 25.0019 6.99313 25.0507 7.13018 25.1423C7.26723 25.2339 7.37405 25.3641 7.43713 25.5163C7.50021 25.6686 7.51671 25.8362 7.48456 25.9979C7.4524 26.1595 7.37303 26.308 7.25647 26.4246C7.13992 26.5411 6.99142 26.6205 6.82976 26.6526C6.6681 26.6848 6.50053 26.6683 6.34825 26.6052C6.19597 26.5421 6.06581 26.4353 5.97423 26.2983C5.88266 26.1612 5.83378 26.0001 5.83378 25.8353C5.83378 25.6142 5.92158 25.4023 6.07788 25.246C6.23417 25.0897 6.44614 25.0019 6.66717 25.0019Z" fill="#F9913A"/><path d="M13.3343 28.3354C13.8288 28.3354 14.3122 28.1888 14.7234 27.9141C15.1345 27.6394 15.455 27.2489 15.6442 26.792C15.8335 26.3352 15.883 25.8325 15.7865 25.3475C15.69 24.8625 15.4519 24.417 15.1022 24.0674C14.7526 23.7177 14.3071 23.4796 13.8221 23.3831C13.3371 23.2867 12.8344 23.3362 12.3776 23.5254C11.9207 23.7146 11.5302 24.0351 11.2555 24.4462C10.9808 24.8574 10.8342 25.3408 10.8342 25.8353C10.8342 26.4984 11.0976 27.1343 11.5665 27.6032C12.0353 28.072 12.6713 28.3354 13.3343 28.3354V28.3354ZM13.3343 25.0019C13.4992 25.0019 13.6603 25.0507 13.7974 25.1423C13.9344 25.2339 14.0412 25.3641 14.1043 25.5163C14.1674 25.6686 14.1839 25.8362 14.1517 25.9979C14.1196 26.1595 14.0402 26.308 13.9236 26.4246C13.8071 26.5411 13.6586 26.6205 13.4969 26.6526C13.3353 26.6848 13.1677 26.6683 13.0154 26.6052C12.8631 26.5421 12.733 26.4353 12.6414 26.2983C12.5498 26.1612 12.501 26.0001 12.501 25.8353C12.501 25.6142 12.5888 25.4023 12.7451 25.246C12.9013 25.0897 13.1133 25.0019 13.3343 25.0019V25.0019Z" fill="#F9913A"/><path d="M3.33358 31.669H15.0419C14.9933 32.449 15.0047 33.2317 15.0761 34.01C15.1096 34.3394 15.2326 34.6533 15.4318 34.9177C15.631 35.1822 15.8988 35.387 16.2062 35.5101L18.498 36.4268C18.8119 37.5463 19.2596 38.6239 19.8314 39.6362L18.8622 41.9072C18.7262 42.2126 18.6791 42.5501 18.7263 42.8811C18.7735 43.212 18.913 43.523 19.1289 43.7782C19.7695 44.5398 20.4743 45.245 21.2357 45.8858C21.4906 46.1017 21.8012 46.2413 22.1318 46.2888C22.4624 46.3362 22.7997 46.2896 23.105 46.1542L25.3769 45.1841C26.3893 45.7552 27.4665 46.2029 28.5854 46.5176L29.5022 48.8111C29.6253 49.1184 29.8302 49.3861 30.0946 49.5853C30.359 49.7845 30.6729 49.9076 31.0023 49.9411C32.0018 50.0357 33.008 50.0357 34.0075 49.9411C34.337 49.9072 34.6509 49.7839 34.9153 49.5844C35.1797 49.3849 35.3845 49.1169 35.5076 48.8094L36.4243 46.5176C37.5433 46.2029 38.6205 45.7552 39.6329 45.1841L41.9031 46.1534C42.2086 46.2889 42.5462 46.3356 42.8771 46.2882C43.208 46.2407 43.5189 46.101 43.774 45.885C44.5356 45.2446 45.2405 44.5397 45.8808 43.7782C46.0966 43.5234 46.2361 43.2129 46.2834 42.8824C46.3307 42.552 46.2839 42.2148 46.1484 41.9097L45.1783 39.6362C45.7478 38.6211 46.1927 37.541 46.5034 36.4193L48.7994 35.5026C49.1048 35.3796 49.371 35.1757 49.5693 34.9129C49.7677 34.6501 49.8907 34.3383 49.9253 34.0108C50.0249 33.0088 50.0249 31.9993 49.9253 30.9973C49.8915 30.6679 49.7682 30.354 49.5689 30.0896C49.3696 29.8252 49.1017 29.6203 48.7944 29.4972L46.5034 28.5854C46.1895 27.4659 45.7418 26.3883 45.17 25.376L46.1392 23.105C46.2752 22.7996 46.3223 22.4621 46.2751 22.1312C46.2279 21.8002 46.0884 21.4893 45.8725 21.234C45.2324 20.472 44.5275 19.7668 43.7657 19.1264C43.5109 18.9103 43.2004 18.7705 42.8697 18.723C42.539 18.6755 42.2017 18.7223 41.8964 18.858L39.6246 19.8281C38.682 19.2994 37.6836 18.877 36.6477 18.5689C36.6535 18.4913 36.6643 18.4163 36.6643 18.3372V13.3343C36.6629 12.8594 36.5592 12.3903 36.3605 11.9589C36.1618 11.5275 35.8726 11.1439 35.5126 10.8341C35.8735 10.5248 36.1637 10.1414 36.3633 9.71001C36.5629 9.2786 36.6672 8.80928 36.6693 8.33394V3.33358C36.6693 2.44946 36.3181 1.60155 35.693 0.976382C35.0678 0.351215 34.2199 0 33.3358 0L3.33358 0C2.44946 0 1.60155 0.351215 0.976382 0.976382C0.351215 1.60155 0 2.44946 0 3.33358L0 8.33394C0.0014772 8.8089 0.105093 9.27798 0.303817 9.70936C0.502541 10.1407 0.791725 10.5243 1.15175 10.8341C0.791725 11.1439 0.502541 11.5275 0.303817 11.9589C0.105093 12.3903 0.0014772 12.8594 0 13.3343L0 18.3347C0.0014772 18.8096 0.105093 19.2787 0.303817 19.7101C0.502541 20.1415 0.791725 20.5251 1.15175 20.8349C0.791725 21.1446 0.502541 21.5282 0.303817 21.9596C0.105093 22.391 0.0014772 22.8601 0 23.335L0 28.3354C0 29.2195 0.351215 30.0674 0.976382 30.6926C1.60155 31.3178 2.44946 31.669 3.33358 31.669ZM35.6026 20.0015C36.8494 20.3106 38.0425 20.8057 39.142 21.4699C39.2548 21.5384 39.3824 21.5789 39.514 21.5881C39.6457 21.5972 39.7776 21.5747 39.8987 21.5224L42.5573 20.3873C42.5794 20.3754 42.6045 20.3702 42.6296 20.3724C42.6546 20.3746 42.6784 20.3842 42.6981 20.3998C43.3912 20.9822 44.0325 21.6235 44.6149 22.3166C44.6264 22.3365 44.6325 22.3591 44.6325 22.382C44.6325 22.405 44.6264 22.4276 44.6149 22.4475L43.4807 25.106C43.4288 25.2274 43.4065 25.3594 43.4156 25.4911C43.4248 25.6228 43.465 25.7505 43.5332 25.8636C44.1973 26.9631 44.6923 28.1562 45.0016 29.403C45.0334 29.5315 45.0953 29.6507 45.1822 29.7505C45.2692 29.8504 45.3787 29.9281 45.5017 29.9772L48.1793 31.0464C48.2033 31.0556 48.2246 31.0708 48.241 31.0905C48.2575 31.1102 48.2687 31.1337 48.2735 31.1589C48.3631 32.0565 48.3631 32.9607 48.2735 33.8583C48.2677 33.8811 48.2566 33.9022 48.2411 33.9198C48.2256 33.9375 48.2062 33.9513 48.1843 33.96L45.5025 35.0309C45.3795 35.08 45.27 35.1577 45.1831 35.2575C45.0961 35.3574 45.0342 35.4765 45.0024 35.6051C44.6931 36.8518 44.1981 38.045 43.534 39.1445C43.4659 39.2576 43.4256 39.3853 43.4165 39.517C43.4073 39.6487 43.4296 39.7807 43.4815 39.9021L44.6166 42.5631C44.6283 42.5849 44.6336 42.6095 44.6318 42.6341C44.6301 42.6588 44.6213 42.6824 44.6066 42.7023C44.0239 43.3951 43.3826 44.0364 42.6898 44.6191C42.6696 44.6303 42.647 44.6361 42.6239 44.6361C42.6009 44.6361 42.5783 44.6303 42.5581 44.6191L39.9012 43.4848C39.7799 43.4331 39.6481 43.4109 39.5166 43.42C39.385 43.4291 39.2575 43.4693 39.1445 43.5373C38.0441 44.2009 36.8501 44.6951 35.6026 45.0033C35.474 45.035 35.3549 45.0969 35.255 45.1839C35.1552 45.2708 35.0775 45.3803 35.0284 45.5033L33.9583 48.1827C33.9497 48.2066 33.9349 48.2279 33.9155 48.2443C33.896 48.2607 33.8725 48.2716 33.8475 48.276C32.9496 48.3594 32.046 48.3594 31.1481 48.276C31.1251 48.2704 31.1038 48.2591 31.0863 48.2433C31.0687 48.2274 31.0553 48.2075 31.0473 48.1852L29.9764 45.5033C29.9272 45.3803 29.8495 45.2708 29.7497 45.1839C29.6498 45.0969 29.5307 45.035 29.4021 45.0033C28.1554 44.6941 26.9622 44.1991 25.8627 43.5348C25.7497 43.4668 25.6222 43.4266 25.4907 43.4175C25.3591 43.4084 25.2273 43.4306 25.106 43.4823L22.4475 44.6174C22.4254 44.6295 22.4002 44.6347 22.3752 44.6325C22.3501 44.6303 22.3263 44.6207 22.3066 44.6049C21.6152 44.0221 20.9753 43.3808 20.394 42.6881C20.3825 42.6682 20.3765 42.6457 20.3765 42.6227C20.3765 42.5997 20.3825 42.5772 20.394 42.5573L21.5282 39.8987C21.5801 39.7773 21.6024 39.6453 21.5933 39.5136C21.5842 39.3819 21.5439 39.2543 21.4757 39.1412C20.8116 38.0417 20.3166 36.8485 20.0073 35.6018C19.9756 35.4732 19.9136 35.3541 19.8267 35.2542C19.7397 35.1544 19.6302 35.0767 19.5073 35.0276L16.8296 33.9583C16.8069 33.9498 16.7866 33.936 16.7703 33.918C16.7541 33.9 16.7424 33.8784 16.7362 33.855V33.8458C16.6466 32.9482 16.6466 32.044 16.7362 31.1464C16.742 31.1237 16.7531 31.1026 16.7686 31.0849C16.7841 31.0672 16.8036 31.0535 16.8254 31.0448L19.5073 29.9739C19.6302 29.9247 19.7397 29.847 19.8267 29.7472C19.9136 29.6473 19.9756 29.5282 20.0073 29.3996C20.3166 28.1529 20.8116 26.9598 21.4757 25.8602C21.5439 25.7471 21.5842 25.6195 21.5933 25.4878C21.6024 25.3561 21.5801 25.2241 21.5282 25.1027L20.3923 22.4433C20.3806 22.4216 20.3753 22.3969 20.3771 22.3723C20.3788 22.3476 20.3876 22.324 20.4023 22.3041C20.9854 21.6117 21.6267 20.9704 22.3191 20.3873C22.3391 20.3758 22.3619 20.3697 22.385 20.3697C22.4081 20.3697 22.4308 20.3758 22.4508 20.3873L25.1077 21.5216C25.2288 21.5738 25.3608 21.5964 25.4924 21.5872C25.6241 21.5781 25.7516 21.5376 25.8644 21.4691C26.9634 20.8053 28.156 20.3105 29.4021 20.0015C29.5307 19.9697 29.6498 19.9078 29.7497 19.8208C29.8495 19.7339 29.9272 19.6244 29.9764 19.5014L31.0464 16.8221C31.055 16.7981 31.0698 16.7768 31.0893 16.7605C31.1087 16.7441 31.1322 16.7331 31.1573 16.7287C32.0551 16.6453 32.9588 16.6453 33.8566 16.7287C33.8796 16.7344 33.9009 16.7456 33.9185 16.7614C33.9361 16.7773 33.9495 16.7973 33.9575 16.8196L35.0284 19.5014C35.0775 19.6244 35.1552 19.7339 35.255 19.8208C35.3549 19.9078 35.474 19.9697 35.6026 20.0015ZM1.66679 3.33358C1.66679 2.89152 1.8424 2.46756 2.15498 2.15498C2.46756 1.8424 2.89152 1.66679 3.33358 1.66679H33.3358C33.7778 1.66679 34.2018 1.8424 34.5144 2.15498C34.8269 2.46756 35.0026 2.89152 35.0026 3.33358V8.33394C35.0026 8.776 34.8269 9.19995 34.5144 9.51254C34.2018 9.82512 33.7778 10.0007 33.3358 10.0007H3.33358C2.89152 10.0007 2.46756 9.82512 2.15498 9.51254C1.8424 9.19995 1.66679 8.776 1.66679 8.33394V3.33358ZM1.66679 13.3343C1.66679 12.8922 1.8424 12.4683 2.15498 12.1557C2.46756 11.8431 2.89152 11.6675 3.33358 11.6675H33.3358C33.7778 11.6675 34.2018 11.8431 34.5144 12.1557C34.8269 12.4683 35.0026 12.8922 35.0026 13.3343V15.517C34.7253 15.2653 34.3749 15.1088 34.0025 15.0703C33.0029 14.9777 31.9969 14.9777 30.9973 15.0703C30.6678 15.1042 30.3538 15.2275 30.0894 15.427C29.825 15.6265 29.6202 15.8945 29.4972 16.202L28.5804 18.4938C27.4615 18.8085 26.3843 19.2562 25.3719 19.8273L23.1017 18.858C22.7961 18.722 22.4583 18.6751 22.1271 18.7225C21.796 18.77 21.485 18.91 21.2299 19.1264C20.8832 19.4239 20.569 19.7148 20.2715 20.0031H3.33358C2.89152 20.0031 2.46756 19.8275 2.15498 19.5149C1.8424 19.2024 1.66679 18.7784 1.66679 18.3363V13.3343ZM1.66679 23.335C1.66679 22.893 1.8424 22.469 2.15498 22.1564C2.46756 21.8439 2.89152 21.6682 3.33358 21.6682H18.8564C18.758 21.8941 18.7073 22.1378 18.7073 22.3841C18.7073 22.6305 18.758 22.8742 18.8564 23.1L19.8264 25.3735C19.2573 26.387 18.8124 27.4654 18.5013 28.5854L16.2053 29.5022C15.9424 29.6136 15.709 29.7848 15.5236 30.0022H3.33358C2.89152 30.0022 2.46756 29.8266 2.15498 29.514C1.8424 29.2014 1.66679 28.7775 1.66679 28.3354V23.335Z" fill="#F9913A"/><path d="M21.6683 32.5024C21.6683 34.6452 22.3037 36.7399 23.4942 38.5215C24.6846 40.3032 26.3767 41.6918 28.3564 42.5118C30.336 43.3318 32.5144 43.5464 34.616 43.1283C36.7176 42.7103 38.6481 41.6785 40.1633 40.1633C41.6785 38.6481 42.7103 36.7176 43.1283 34.616C43.5464 32.5144 43.3318 30.336 42.5118 28.3564C41.6918 26.3767 40.3032 24.6846 38.5215 23.4942C36.7399 22.3037 34.6452 21.6683 32.5024 21.6683C29.63 21.6716 26.8762 22.8141 24.8452 24.8452C22.8141 26.8762 21.6716 29.63 21.6683 32.5024V32.5024ZM41.6697 32.5024C41.6697 34.3155 41.1321 36.0879 40.1248 37.5955C39.1174 39.1031 37.6857 40.2781 36.0106 40.9719C34.3355 41.6658 32.4922 41.8473 30.7139 41.4936C28.9357 41.1399 27.3022 40.2668 26.0201 38.9847C24.738 37.7026 23.8649 36.0691 23.5112 34.2909C23.1575 32.5126 23.339 30.6693 24.0329 28.9942C24.7267 27.3191 25.9017 25.8874 27.4093 24.88C28.9169 23.8727 30.6893 23.3351 32.5024 23.3351C34.9328 23.3379 37.2629 24.3047 38.9815 26.0233C40.7001 27.7419 41.6669 30.0719 41.6697 32.5024V32.5024Z" fill="#F9913A"/><path d="M26.6686 32.5023C26.6686 33.6561 27.0107 34.784 27.6517 35.7434C28.2928 36.7028 29.2039 37.4505 30.2699 37.892C31.3358 38.3336 32.5088 38.4491 33.6404 38.224C34.7721 37.9989 35.8116 37.4433 36.6274 36.6274C37.4433 35.8116 37.9989 34.7721 38.224 33.6404C38.4491 32.5088 38.3336 31.3358 37.892 30.2699C37.4505 29.2039 36.7028 28.2928 35.7434 27.6517C34.784 27.0107 33.6561 26.6686 32.5023 26.6686C30.9557 26.6706 29.4731 27.2858 28.3794 28.3794C27.2858 29.4731 26.6706 30.9557 26.6686 32.5023V32.5023ZM36.6693 32.5023C36.6693 33.3265 36.4249 34.1321 35.967 34.8174C35.5092 35.5026 34.8584 36.0367 34.097 36.3521C33.3356 36.6675 32.4977 36.75 31.6894 36.5892C30.8811 36.4285 30.1386 36.0316 29.5558 35.4488C28.9731 34.8661 28.5762 34.1236 28.4154 33.3153C28.2547 32.507 28.3372 31.6691 28.6526 30.9077C28.9679 30.1463 29.502 29.4955 30.1873 29.0376C30.8725 28.5798 31.6782 28.3354 32.5023 28.3354C33.6071 28.3367 34.6662 28.7761 35.4474 29.5573C36.2285 30.3385 36.668 31.3976 36.6693 32.5023V32.5023Z" fill="#F9913A"/><path d="M20.8348 6.66722H31.6689C31.89 6.66722 32.1019 6.57941 32.2582 6.42312C32.4145 6.26683 32.5023 6.05485 32.5023 5.83382C32.5023 5.61279 32.4145 5.40081 32.2582 5.24452C32.1019 5.08823 31.89 5.00043 31.6689 5.00043H20.8348C20.6138 5.00043 20.4018 5.08823 20.2455 5.24452C20.0892 5.40081 20.0014 5.61279 20.0014 5.83382C20.0014 6.05485 20.0892 6.26683 20.2455 6.42312C20.4018 6.57941 20.6138 6.66722 20.8348 6.66722Z" fill="#F9913A"/><path d="M20.8348 16.6679H25.8352C26.0562 16.6679 26.2682 16.5801 26.4245 16.4238C26.5808 16.2675 26.6686 16.0555 26.6686 15.8345C26.6686 15.6135 26.5808 15.4015 26.4245 15.2452C26.2682 15.0889 26.0562 15.0011 25.8352 15.0011H20.8348C20.6138 15.0011 20.4018 15.0889 20.2455 15.2452C20.0892 15.4015 20.0014 15.6135 20.0014 15.8345C20.0014 16.0555 20.0892 16.2675 20.2455 16.4238C20.4018 16.5801 20.6138 16.6679 20.8348 16.6679Z" fill="#F9913A"/></svg></span> <span>Setup PixaURL</span></a></Link>
                </div>
          
            </div>
            <div className={styles.faq_help}>
                    <div className="pu_container">
                        <div className={styles.pu_top_help}>
                            <div className={styles.pu_top_left}>
                                <span>FAQ</span>
                                <h3 className={styles.heading_main}>Frequently</h3>
                                <h3>Asked Questions</h3>
                            </div>
                            <div className={styles.pu_top_center}>
                               <p>Check out our frequently asked <br/>
                                questions for answers.</p> 
                            </div>
                            <div className={styles.pu_top_right}>
                               <span>contact us</span>
                            </div>
                        </div>
                        <div className={styles.pu_faq_tab}>
                                {accrodionFaq.map(tab =>          
                                 <div key={tab.id} className={styles.pu_faq_field +' '+ (tab.id === isAccActive ? styles.active : '')} onClick={() => accClick(tab.id)}>  
                                    <div className={styles.pu_field_left}>  
                                        <h3>{tab.id}</h3>
                                    </div>
                                    <div className={styles.pu_field_center}>  
                                        <h3>{tab.title}</h3>
                                        <p style={{display:'none'}}>{tab.description}</p>
                                    </div>
                                    <div className={styles.pu_field_right}>  
                                        <span className={styles.plus_faq}><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 0C5.60722 0 0 5.60722 0 12.5C0 19.3928 5.60722 25 12.5 25C19.3928 25 25 19.3928 25 12.5C25 5.60722 19.3928 0 12.5 0ZM17.9688 13.5416H13.5416V17.9688C13.5416 18.5438 13.0751 19.0104 12.5 19.0104C11.9249 19.0104 11.4584 18.5438 11.4584 17.9688V13.5416H7.03125C6.45618 13.5416 5.98965 13.0751 5.98965 12.5C5.98965 11.9249 6.45618 11.4584 7.03125 11.4584H11.4584V7.03125C11.4584 6.45618 11.9249 5.98965 12.5 5.98965C13.0751 5.98965 13.5416 6.45618 13.5416 7.03125V11.4584H17.9688C18.5438 11.4584 19.0104 11.9249 19.0104 12.5C19.0104 13.0751 18.5438 13.5416 17.9688 13.5416V13.5416Z" fill="black"/></svg></span>
                                        <span style={{display:'none'}} className={styles.minus_faq}><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 0C5.60722 0 0 5.60722 0 12.5C0 19.3928 5.60722 25 12.5 25C19.3928 25 25 19.3928 25 12.5C25 5.60722 19.3928 0 12.5 0ZM17.9688 13.5416H7.03125C6.45618 13.5416 5.98965 13.0751 5.98965 12.5C5.98965 11.9249 6.45618 11.4584 7.03125 11.4584H17.9688C18.5438 11.4584 19.0104 11.9249 19.0104 12.5C19.0104 13.0751 18.5438 13.5416 17.9688 13.5416Z" fill="black"/></svg></span>
                                    </div>
                                </div>
                                )}
                        </div>  

                    </div>

                </div>

                                    
        </>


    );
}
export default Help;
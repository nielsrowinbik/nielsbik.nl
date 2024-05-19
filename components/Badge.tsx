function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 px-1.5 py-1 align-bottom text-sm text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
    />
  );
}

export function ProRailBadge() {
  return (
    <Badge href="https://www.prorail.nl">
      <svg className="m-0.5" height="16" viewBox="0 0 130 29">
        <g fill="#b20a2f">
          <path d="M77.6223767,24.2115342 L75.5213766,16.9232495 C79.5776333,16.4690312 81.1693498,13.0400028 81.1693498,10.4618341 C81.1693498,7.5605946 79.2140932,3.95243786 74.0393772,3.95243786 L61.2565188,3.95243786 L60.38697,7.70453702 L62.8171214,7.70453702 L61.1107752,14.8904626 L64.4022876,14.8904626 L63.7030459,17.7373239 L60.4557479,17.7373239 L58.9033331,24.2115342 L56.4748192,24.2115342 L55.5725191,27.9524379 L67.7347391,27.9524379 L68.6796161,24.2115342 L65.132643,24.2115342 L66.760386,17.2815062 L70.200917,17.2815062 L72.9160053,27.9524379 L80.4651954,27.9524379 L81.3740458,24.2115342 L77.6223767,24.2115342 Z M69.9909539,13.9524379 L67.480916,13.9524379 L68.9561274,7.95243786 L71.642008,7.95243786 C73.2572711,7.95243786 74.4274809,8.7975499 74.4274809,10.4611795 C74.4274809,13.0792539 72.3624962,13.9524379 69.9909539,13.9524379 L69.9909539,13.9524379 Z" />
          <path d="M54.0342968,14.4972856 L56.5648855,14.4972856 C56.220621,9.50313732 52.3668166,6.95243786 47.6205351,6.95243786 C43.2054654,6.95243786 39.0547125,9.29019044 38.7022901,14.5003943 L42.0046186,14.5003943 L41.3046686,17.2733668 L38.8850276,17.2733668 C39.7465046,21.3986297 43.246255,23.9524379 47.6205351,23.9524379 C52.211816,23.9524379 55.5369868,21.221433 56.3821479,17.2640407 L53.3310835,17.2640407 L54.0342968,14.4972856 Z M48.1121231,19.9524379 C45.9540322,19.9524379 44.6564885,18.2974985 44.6564885,15.5444656 C44.6564885,12.6073772 45.8834405,10.9524379 48.1121231,10.9524379 C50.3458479,10.9524379 51.6030534,12.6073772 51.6030534,15.4368399 C51.6030534,18.2974985 50.3458479,19.9524379 48.1121231,19.9524379 L48.1121231,19.9524379 Z" />
          <path d="M13.2517005,-0.0475621417 L0.988653578,-0.0475621417 L0,4.01933997 L3.09071197,4.01933997 L3.09071197,14.6431822 L6.03640063,14.6431822 L5.38301601,17.4802582 L5.37365967,17.4802582 L5.3689815,17.491453 L3.09071197,17.491453 L3.09071197,19.8919328 L0.935634301,19.8919328 L0,23.9524379 L11.7718389,23.9524379 L12.7074732,19.8919328 L8.97897051,19.8919328 L8.97897051,15.2189135 L12.7729676,15.2189135 C18.6300383,15.2189135 20.8396947,11.2031875 20.8396947,7.58407643 C20.8396947,3.78584893 18.1513054,-0.0475621417 13.2517005,-0.0475621417 M10.6753266,10.9524379 L8.93129771,10.9524379 L8.93129771,3.95243786 L11.357142,3.95243786 C13.3848576,3.95243786 14.8854962,5.30601169 14.8854962,7.48929647 C14.8854962,9.80903656 13.5621619,10.9524379 10.6753266,10.9524379" />
          <path d="M36.8122734,7 C34.0289116,7 31.920402,8.59004337 30.922654,11.4928342 L30.848388,11.4928342 L30.848388,7.24203281 L24.127312,7.24203281 L23.1570102,11.1065435 L25.9597457,11.1065435 L25.9597457,14.6392608 L29.0902204,14.6392608 L28.4105247,17.4843485 L28.4056813,17.4987743 L25.9597457,17.4987743 L25.9597457,20.1386951 L23.7947293,20.1386951 L22.8244275,24 L34.1370817,24 L35.0492623,20.1386951 L31.4199136,20.1386951 L31.4199136,18.3691307 C31.4199136,14.9630398 33.2539617,12.0666604 35.7612475,12.0666604 L36.2875677,12.0666604 L37.7099237,7 L36.8122734,7" />
          <path d="M98.5146917,14.9372291 C97.7475052,12.1919069 95.3775037,10.9524379 90.9940354,10.9524379 C89.0983525,10.9524379 87.5401044,11.2094201 86.2763158,11.7249515 L86.8652349,14.1490458 L87.1835695,15.4245551 C88.1815487,14.6990504 89.0235439,14.2806709 90.2570907,14.2806709 C92.1559569,14.2806709 93.4245205,15.4527605 93.4245205,17.1482163 L93.3910954,17.69352 C91.7182468,17.2688726 91.3410202,17.20306 89.6538465,17.2688726 C85.6794383,17.4443726 83.3587786,20.1661903 83.3587786,23.3502625 C83.3587786,26.2945892 85.4327289,27.9524379 88.9169018,27.9524379 C90.5404085,27.9524379 91.8726391,27.5058529 93.4245205,26.4309151 L93.4245205,27.7158262 L101.314445,27.7158262 L102.21374,23.9378743 L98.8059679,23.9378743 L98.8059679,17.7765691 L95.6592298,17.7765691 L96.3722995,14.9372291 L98.5146917,14.9372291 Z M93.2824427,23.3450167 C91.8415169,24.5279481 90.9785896,24.9524379 89.8974882,24.9524379 C88.402833,24.9524379 87.3282443,24.0678367 87.3282443,22.8849054 C87.3282443,21.7717328 88.402833,20.9524379 90.1498538,20.9524379 C90.9785896,20.9524379 91.9489758,21.0251651 93.2824427,21.8132913 L93.2824427,23.3450167 L93.2824427,23.3450167 Z" />
          <path d="M110.136341,9 C111.795547,9 113.129771,7.65259117 113.129771,5.98437072 C113.129771,4.30956951 111.795547,3 110.136341,3 C108.472236,3 107.175573,4.30956951 107.175573,5.98437072 C107.175573,7.65259117 108.472236,9 110.136341,9" />
          <polygon points="112.41087 24.0829268 112.41087 11 105.153638 11 104.257434 14.7674797 110.252905 14.7674797 109.533583 17.6878049 106.708519 17.6878049 106.708519 24.0829268 105.153638 24.0829268 104.198473 28 115.208981 28 116.10687 24.0829268" />
          <polygon points="126.529553 24.1170313 126.529553 4 119.054482 4 118.091603 7.71064287 120.776096 7.71064287 120.776096 14.8903503 124.168288 14.8903503 123.441876 17.786069 120.776096 17.786069 120.776096 24.1170313 118.991538 24.1170313 118.091603 28 129.03542 28 130 24.1170313" />
        </g>
      </svg>
      <span className="sr-only">ProRail</span>
    </Badge>
  );
}

export function StuviaBadge() {
  return (
    <Badge href="https://www.stuvia.com">
      {/* <svg
        width="18"
        height="18"
        viewBox="0 0 33 41"
        fill="none"
        role="img"
        aria-label="Stuvia logo"
        className="!mr-1"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5.44816C0 2.9915 1.99149 1 4.44816 1H27.9599C30.4165 1 32.408 2.9915 32.408 5.44816V34.5518C32.408 37.0085 30.4165 39 27.9599 39H4.44816C1.99149 39 0 37.0085 0 34.5518V5.44816ZM22.1112 13.9061V13.3723C22.1112 10.1251 21.177 9.4579 16.5955 9.4579C11.2132 9.4579 10.1456 10.1251 10.1456 13.5057C10.1456 15.6408 10.6794 16.6194 12.1028 17.0643C12.7994 17.2691 13.0808 17.2853 16.7368 17.4952L17.752 17.5535C22.7339 17.8649 24.4242 18.1763 25.8476 19.1994C27.6714 20.4448 28.2941 22.1796 28.2941 25.9606C28.2941 29.7415 27.7604 31.6542 26.4704 32.9442C24.6911 34.6789 22.4226 35.1682 16.2396 35.1682C10.8573 35.1682 9.03359 34.8569 7.07641 33.7004C5.96437 33.0331 5.03024 31.6097 4.71885 30.0529C4.45201 28.7629 4.40751 27.8733 4.36302 25.5158H9.83423C9.83423 27.7398 9.96771 28.496 10.457 29.2522C11.1687 30.4532 11.8804 30.5867 16.5065 30.5867C19.8426 30.5867 20.7767 30.4532 21.6219 29.786C22.3781 29.2522 22.6895 28.0957 22.6895 26.0495C22.6895 24.0033 22.2446 23.1582 21.0436 22.7579C20.5691 22.58 18.6861 22.3872 15.3944 22.1796C10.3235 21.8683 9.256 21.6903 7.74363 20.9786C5.38607 19.8221 4.45201 17.687 4.45201 13.5947C4.45201 10.0806 5.20816 7.90104 6.80951 6.74451C8.63327 5.36556 10.9463 4.96524 16.462 4.96524C21.9777 4.96524 24.4242 5.54348 25.8921 7.18932C27.0486 8.47928 27.5824 10.2585 27.5824 12.8385V13.9061H22.1112Z"
          fill="#199BE9"
        />
      </svg>
      Stuvia */}
      <svg className="mx-0.5" height="20" viewBox="0 0 120 40">
        <path
          d="M97.034 36.718C97.7174 37.2028 98.4437 37.5971 99.2054 37.8948C100.387 38.3573 101.662 38.5913 102.995 38.5913C104.659 38.5913 106.268 38.244 107.777 37.5587C107.793 37.5511 107.809 37.5436 107.826 37.5361L107.833 37.5328C108.366 37.9787 109.042 38.2253 109.743 38.2253H117.018C117.809 38.2253 118.568 37.9109 119.127 37.3519C119.686 36.7929 120 36.0342 120 35.2431V31.3789C120 30.5879 119.686 29.8291 119.127 29.2701C118.568 28.7106 117.809 28.3967 117.018 28.3967H116.428V21.1358C116.428 20.1663 116.401 19.3065 116.346 18.5802C116.284 17.7578 116.187 17.08 116.05 16.5078C115.751 15.2558 115.17 14.0881 114.325 13.0368C113.851 12.4479 113.265 11.9177 112.582 11.4608C111.97 11.0508 111.263 10.6895 110.481 10.3867C110.481 10.3862 110.481 10.3862 110.48 10.3862C109.71 10.088 108.869 9.86351 107.981 9.71844C107.137 9.58047 106.226 9.51072 105.273 9.51072C103.966 9.51072 102.725 9.64568 101.584 9.91154C100.388 10.19 99.2711 10.6192 98.2643 11.1873C96.5998 12.127 95.2158 13.4477 94.1377 15.1233V13.1106C94.1377 12.3196 93.8232 11.5608 93.2643 11.0018C92.9069 10.644 92.4671 10.3867 91.99 10.2477C92.2887 10.0404 92.5708 9.80136 92.8336 9.53091C93.3542 8.99564 93.7545 8.38302 94.0235 7.71027C94.2883 7.0471 94.4228 6.33591 94.4228 5.58833C94.4228 4.84076 94.2878 4.12606 94.0209 3.46338C93.749 2.78763 93.3441 2.17446 92.818 1.64121C92.2963 1.113 91.7003 0.704089 91.0463 0.426086C90.3806 0.143542 89.6917 0 88.9209 0C88.1501 0 87.4171 0.147096 86.7428 0.437242C86.0529 0.734446 85.4378 1.1742 84.914 1.74586C83.936 2.81389 83.4194 4.10937 83.4194 5.58937C83.4194 7.06937 83.9548 8.41792 84.9681 9.48999L84.9667 9.48846C85.1901 9.72554 85.4291 9.93933 85.6813 10.1294H76.2025C75.5823 10.1294 74.9823 10.3225 74.4824 10.6753C73.9825 10.3225 73.3826 10.1294 72.7623 10.1294H54.4349C53.6439 10.1294 52.8852 10.4438 52.3261 11.0028C52.1932 11.1357 52.0739 11.2798 51.9698 11.433C51.8657 11.2798 51.7464 11.1357 51.6134 11.0028C51.0544 10.4433 50.2957 10.1294 49.5047 10.1294H43.1647V5.72635C43.1647 4.53245 42.453 3.45331 41.3551 2.98423C40.9776 2.82297 40.5787 2.74414 40.1835 2.74414C39.4303 2.74414 38.6888 3.02974 38.1227 3.57054L33.9598 7.54901C33.4979 7.9903 33.1934 8.56467 33.0835 9.18479C32.435 5.65596 29.3431 2.98221 25.6268 2.98221H7.58188C3.39452 2.98221 0 6.37673 0 10.5641V32.0966C0 36.284 3.39452 39.6785 7.58188 39.6785H25.6268C29.8141 39.6785 33.2087 36.284 33.2087 32.0966V31.9057C33.2649 32.3988 33.3355 32.8259 33.421 33.1955V33.1945C33.6054 33.9921 33.9284 34.7361 34.3808 35.4064C34.8165 36.0519 35.3735 36.6291 36.0362 37.1219C36.7196 37.6299 37.502 38.012 38.3628 38.2572C39.1412 38.479 39.997 38.5913 40.9058 38.5913C41.6185 38.5913 42.3398 38.5246 43.0499 38.3927C43.748 38.2627 44.4526 38.0666 45.1431 37.8104C45.515 37.6718 45.8476 37.4646 46.1277 37.2058C47.5273 38.1252 49.2221 38.5913 51.1696 38.5913C51.9329 38.5913 52.7113 38.5084 53.4826 38.3451C54.2297 38.1869 54.9894 37.9494 55.7395 37.6385C55.8841 37.5788 56.0291 37.5157 56.1747 37.45C56.7226 37.9478 57.4378 38.2253 58.1813 38.2253H66.0039C66.7949 38.2253 67.5536 37.9109 68.1126 37.3519C68.6721 36.7929 68.9861 36.0342 68.9861 35.2431V33.9931L69.9748 36.6493C70.4094 37.8164 71.5239 38.5908 72.7694 38.5908H76.5401C77.7947 38.5908 78.9153 37.8058 79.3434 36.6266L80.7233 32.8265V35.2426C80.7233 36.0336 81.0377 36.7924 81.5968 37.3514C82.1557 37.9109 82.9145 38.2248 83.7055 38.2248H94.4419C95.233 38.2248 95.9917 37.9104 96.5508 37.3514C96.7413 37.1614 96.9031 36.9481 97.034 36.718Z"
          fill="#199BE9"
        />
        <path
          d="M41.7969 31.4931C41.0665 31.4931 40.6101 31.291 40.4276 30.8871L40.4271 30.8866C40.2441 30.4832 40.1532 29.4197 40.1532 27.6971V16.9511H45.3124V27.126C45.3124 29.4122 45.466 31.0696 45.7729 32.0987C46.0797 33.1278 46.6968 33.9664 47.6244 34.6138C48.5514 35.2618 49.7235 35.5858 51.1408 35.5858C53.376 35.5858 55.7127 34.6179 58.1526 32.682V35.2199L58.1516 35.2204H65.974V31.3562H62.315V16.9516H65.8042L72.7411 35.5858H76.5118L83.2784 16.9516H86.5381L86.9637 16.9511V31.3557H83.6772V35.2199H94.4137V31.3557H91.1272V13.0874L76.1742 13.0879V16.9516H79.1185L74.5416 29.5042L69.9752 16.9516H72.734V13.0879H54.4051V16.9516H58.1521V28.9325C55.9614 30.8527 53.9016 31.8131 51.9733 31.8131C51.3304 31.8131 50.7971 31.6301 50.3735 31.2642C49.95 30.8987 49.6942 30.4337 49.6068 29.8696C49.5193 29.3055 49.4753 28.2082 49.4753 26.577V13.0874H40.1532V5.7021L35.9902 9.68056V13.0874H33.2294V16.9511H35.9902V27.9261C35.9902 30.091 36.0923 31.6155 36.297 32.499C36.5017 33.3831 36.9981 34.119 37.7871 34.7053C38.5756 35.2922 39.6058 35.5858 40.8765 35.5858C41.9425 35.5858 43.009 35.3877 44.0755 34.9914V31.0357C43.331 31.341 42.5713 31.4931 41.7969 31.4931Z"
          fill="white"
        />
        <path
          d="M87.1063 7.41712C87.5955 7.93521 88.191 8.19451 88.892 8.19451H88.8925C89.579 8.19451 90.1704 7.93926 90.6672 7.42824C91.1636 6.91773 91.4123 6.29702 91.4123 5.56512C91.4123 4.83321 91.1636 4.21605 90.6672 3.71312C90.1709 3.21018 89.579 2.95847 88.8925 2.95847C88.1617 2.95847 87.5592 3.21777 87.0845 3.73586C86.6094 4.25446 86.3723 4.84838 86.3723 5.56512C86.3723 6.28186 86.6165 6.89902 87.1063 7.41712Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M109.715 32.5217V35.2199L109.715 35.2204H116.99V31.3562H113.418V21.113C113.418 19.3146 113.32 18.0029 113.123 17.1801C112.926 16.3572 112.542 15.5909 111.972 14.8822C111.403 14.1731 110.537 13.5943 109.376 13.1445C108.214 12.6951 106.837 12.4702 105.245 12.4702C100.907 12.4702 97.8533 14.1928 96.0862 17.6375L100.074 18.7349C101.009 16.9971 102.521 16.1282 104.61 16.1282C105.822 16.1282 106.804 16.3718 107.557 16.8596C108.309 17.3479 108.787 17.8963 108.992 18.5059C109.196 19.116 109.298 19.9848 109.298 21.1125V23.3072C107.443 22.0577 105.522 21.4325 103.536 21.4325C101.403 21.4325 99.5805 22.1108 98.0686 23.4675C96.5568 24.8246 95.8007 26.5462 95.8007 28.5893C95.8007 30.6323 96.5128 32.309 97.9372 33.6196C99.3616 34.9308 101.038 35.5858 102.966 35.5858C105.449 35.5858 107.699 34.5643 109.715 32.5217ZM103.843 24.7943C105.683 24.7943 107.502 25.5257 109.298 26.989V29.5734C107.502 31.3415 105.595 32.2255 103.58 32.2255C102.411 32.2255 101.487 31.8748 100.808 31.1737C100.128 30.4726 99.7887 29.6037 99.7887 28.567C99.7887 27.4545 100.176 26.5472 100.95 25.8462C101.724 25.1451 102.689 24.7943 103.843 24.7943Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.7404 9.75536C3.7404 7.80125 5.3245 6.21715 7.27861 6.21715H25.9806C27.9347 6.21715 29.5188 7.80125 29.5188 9.75536V32.9054C29.5188 34.8595 27.9347 36.4436 25.9806 36.4436H7.27861C5.3245 36.4436 3.7404 34.8595 3.7404 32.9054V9.75536ZM21.3284 16.483V16.0584C21.3284 13.4756 20.5853 12.9448 16.941 12.9448C12.6597 12.9448 11.8106 13.4756 11.8106 16.1646C11.8106 17.8629 12.2352 18.6414 13.3674 18.9952C13.9215 19.1581 14.1453 19.171 17.0534 19.338L17.8609 19.3844C21.8237 19.632 23.1682 19.8797 24.3004 20.6935C25.7511 21.6842 26.2465 23.0641 26.2465 26.0716C26.2465 29.0791 25.8219 30.6005 24.7958 31.6266C23.3805 33.0065 21.576 33.3957 16.6579 33.3957C12.3767 33.3957 10.926 33.148 9.36921 32.2281C8.48466 31.6974 7.74162 30.5651 7.49393 29.3267C7.28168 28.3007 7.24628 27.593 7.21089 25.7178H11.5629C11.5629 27.4869 11.669 28.0884 12.0583 28.6899C12.6243 29.6452 13.1905 29.7513 16.8702 29.7513C19.5239 29.7513 20.2669 29.6452 20.9391 29.1144C21.5407 28.6899 21.7883 27.7699 21.7883 26.1423C21.7883 24.5148 21.4345 23.8425 20.4792 23.5241C20.1018 23.3826 18.604 23.2292 15.9856 23.0641C11.9521 22.8164 11.1029 22.6749 9.89994 22.1088C8.02466 21.1889 7.28168 19.4905 7.28168 16.2354C7.28168 13.4402 7.88314 11.7065 9.15691 10.7865C10.6076 9.68966 12.4474 9.37123 16.8348 9.37123C21.2222 9.37123 23.1682 9.83118 24.3358 11.1403C25.2558 12.1664 25.6804 13.5817 25.6804 15.6339V16.483H21.3284Z"
          fill="white"
        />
      </svg>
    </Badge>
  );
}

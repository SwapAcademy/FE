import Link from 'next/link';

let navItems = [
  {
    name: 'Courses',
    href: '/mentor/courses',
  },
  {
    name: 'Live Courses',
    href: '/mentor/live-courses',
  },
  {
    name: 'Learning Progress',
    href: '/mentor/learning-progress',
  },
  {
    name: 'My Points',
    href: '/mentor/my-points',
  },
  {
    name: 'Bookmarks',
    href: '/mentor/bookmarks',
  },
];

export default function SideNav() {
  return (
    <div className="space-y-8 w-1/5">
      <Logo />
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/mentor/dashboard">Dashboard</Link>
          </li>
          <div>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </div>
          <li>
            <Link href="/mentor/studio">Mentor Studio</Link>
          </li>
          <div>
            <li>
              <Link href="/mentor/settings">Settings</Link>
            </li>
            <li>
              <Link href="/mentor/help">Help</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="164"
      height="90"
      viewBox="0 0 164 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="163.469"
        height="89.2536"
        fill="white"
      />
      <path
        d="M42.6797 73.9214L47.5078 60.8667C47.7266 60.2886 48.0625 59.812 48.5156 59.437C48.9688 59.062 49.4883 58.8745 50.0742 58.8745C50.6914 58.8745 51.2188 59.0581 51.6562 59.4253C52.0938 59.7847 52.4219 60.2651 52.6406 60.8667L57.3516 73.9214C57.4766 74.2651 57.5391 74.562 57.5391 74.812C57.5391 75.2729 57.375 75.6519 57.0469 75.9487C56.7266 76.2456 56.3398 76.394 55.8867 76.394C54.9883 76.394 54.4023 75.98 54.1289 75.1519L53.4141 72.8901H46.7461L46.0195 75.1284C45.7539 75.9722 45.1797 76.394 44.2969 76.394C43.8125 76.394 43.3945 76.2339 43.043 75.9136C42.6914 75.5933 42.5156 75.1948 42.5156 74.7183C42.5156 74.4604 42.5703 74.1948 42.6797 73.9214ZM50.0508 62.6245L47.7773 69.5854H52.3359L50.0977 62.6245H50.0508ZM71.3644 65.3784C71.3644 65.7769 71.2394 66.1558 70.9894 66.5151C70.7394 66.8667 70.423 67.0425 70.0402 67.0425C69.7667 67.0425 69.3409 66.9292 68.7628 66.7026C68.1847 66.4761 67.7003 66.3628 67.3097 66.3628C66.6847 66.3628 66.1456 66.5386 65.6925 66.8901C65.2394 67.2339 64.9113 67.6675 64.7081 68.1909C64.505 68.7065 64.4034 69.2729 64.4034 69.8901C64.4034 70.4761 64.5128 71.0308 64.7316 71.5542C64.9503 72.0698 65.2863 72.5034 65.7394 72.855C66.1925 73.1987 66.7159 73.3706 67.3097 73.3706C67.6378 73.3706 68.1222 73.2534 68.7628 73.019C69.4034 72.7769 69.7745 72.6558 69.8761 72.6558C70.2823 72.6558 70.63 72.8042 70.9191 73.1011C71.2159 73.3979 71.3644 73.7534 71.3644 74.1675C71.3644 74.5815 71.2042 74.9526 70.8839 75.2808C70.5714 75.6089 70.1769 75.8589 69.7003 76.0308C69.2316 76.2026 68.7745 76.3315 68.3292 76.4175C67.8839 76.5034 67.4855 76.5464 67.1339 76.5464C65.9308 76.5464 64.8527 76.2417 63.8995 75.6323C62.9464 75.0229 62.2159 74.2144 61.7081 73.2065C61.2003 72.1987 60.9464 71.0933 60.9464 69.8901C60.9464 69.0229 61.0988 68.1831 61.4034 67.3706C61.7159 66.5581 62.1378 65.8472 62.6691 65.2378C63.2003 64.6206 63.8527 64.1284 64.6261 63.7612C65.4073 63.3862 66.2433 63.1987 67.1339 63.1987C67.5245 63.1987 67.9425 63.2378 68.3878 63.3159C68.8331 63.3862 69.2863 63.4995 69.7472 63.6558C70.2159 63.812 70.6027 64.0425 70.9073 64.3472C71.212 64.644 71.3644 64.9878 71.3644 65.3784ZM87.2522 65.6011V74.144C87.2522 74.3862 87.2483 74.5815 87.2405 74.73C87.2327 74.8784 87.1975 75.0737 87.135 75.3159C87.0803 75.5503 86.9983 75.7378 86.8889 75.8784C86.7795 76.0112 86.6116 76.1323 86.385 76.2417C86.1663 76.3433 85.9006 76.394 85.5881 76.394C85.1116 76.394 84.7483 76.2729 84.4983 76.0308C84.2483 75.7886 84.0608 75.4214 83.9358 74.9292C83.0217 76.0073 81.9241 76.5464 80.6428 76.5464C79.01 76.5464 77.6506 75.9214 76.5647 74.6714C75.4788 73.4136 74.9358 71.8198 74.9358 69.8901C74.9358 68.6479 75.1897 67.5151 75.6975 66.4917C76.2053 65.4604 76.8967 64.6558 77.7717 64.0776C78.6467 63.4917 79.6038 63.1987 80.6428 63.1987C81.3069 63.1987 81.928 63.3315 82.5061 63.5972C83.0842 63.8628 83.5608 64.2573 83.9358 64.7808C83.9827 64.3589 84.1623 64.0151 84.4748 63.7495C84.7952 63.4761 85.1663 63.3394 85.5881 63.3394C85.8147 63.3394 86.0178 63.3667 86.1975 63.4214C86.3772 63.4761 86.5256 63.5464 86.6428 63.6323C86.76 63.7104 86.8577 63.8198 86.9358 63.9604C87.0139 64.0933 87.0725 64.2183 87.1116 64.3354C87.1584 64.4448 87.1897 64.5894 87.2053 64.769C87.2288 64.9487 87.2405 65.0894 87.2405 65.1909C87.2483 65.2925 87.2522 65.4292 87.2522 65.6011ZM78.3928 69.8901C78.3928 70.4683 78.4866 71.0151 78.6741 71.5308C78.8616 72.0386 79.1663 72.4722 79.5881 72.8315C80.0178 73.1909 80.5295 73.3706 81.1233 73.3706C81.6936 73.3706 82.1858 73.1948 82.5998 72.8433C83.0217 72.4839 83.3264 72.0464 83.5139 71.5308C83.7014 71.0151 83.7952 70.4683 83.7952 69.8901C83.7952 69.312 83.7014 68.7651 83.5139 68.2495C83.3342 67.7261 83.0334 67.2808 82.6116 66.9136C82.1975 66.5464 81.7014 66.3628 81.1233 66.3628C80.5217 66.3628 80.0061 66.5464 79.5764 66.9136C79.1545 67.2808 78.8498 67.7222 78.6623 68.2378C78.4827 68.7534 78.3928 69.3042 78.3928 69.8901ZM103.913 59.6948V74.4722C103.913 75.0425 103.749 75.5073 103.421 75.8667C103.101 76.2183 102.687 76.394 102.179 76.394C101.249 76.394 100.675 75.9136 100.456 74.9526C100.152 75.4526 99.7025 75.8433 99.1087 76.1245C98.515 76.4058 97.9056 76.5464 97.2806 76.5464C96.4369 76.5464 95.6517 76.3628 94.9252 75.9956C94.2064 75.6206 93.6048 75.1284 93.1205 74.519C92.6439 73.9097 92.2689 73.2183 91.9955 72.4448C91.7298 71.6636 91.597 70.8628 91.597 70.0425C91.597 69.1831 91.7142 68.355 91.9486 67.5581C92.1908 66.7534 92.5345 66.0229 92.9798 65.3667C93.4252 64.7104 94.0111 64.187 94.7377 63.7964C95.4642 63.3979 96.2728 63.1987 97.1634 63.1987C98.4447 63.1987 99.5423 63.5972 100.456 64.394V59.6948C100.456 59.1245 100.617 58.6636 100.937 58.312C101.257 57.9526 101.671 57.7729 102.179 57.7729C102.687 57.7729 103.101 57.9526 103.421 58.312C103.749 58.6636 103.913 59.1245 103.913 59.6948ZM100.456 69.7729C100.456 69.187 100.363 68.644 100.175 68.144C99.9877 67.644 99.6791 67.2222 99.2494 66.8784C98.8275 66.5347 98.3236 66.3628 97.7377 66.3628C97.1673 66.3628 96.6712 66.5464 96.2494 66.9136C95.8275 67.2808 95.5228 67.7261 95.3353 68.2495C95.1478 68.7729 95.0541 69.3198 95.0541 69.8901C95.0541 70.4526 95.1478 70.9917 95.3353 71.5073C95.5228 72.0229 95.8275 72.4644 96.2494 72.8315C96.6712 73.1909 97.1673 73.3706 97.7377 73.3706C98.1908 73.3706 98.597 73.2651 98.9564 73.0542C99.3158 72.8354 99.6009 72.5503 99.8119 72.1987C100.023 71.8472 100.183 71.4644 100.292 71.0503C100.402 70.6362 100.456 70.2104 100.456 69.7729ZM118.911 71.0269H111.551C111.661 71.8394 112.016 72.4604 112.618 72.8901C113.227 73.312 113.958 73.5229 114.809 73.5229C115.208 73.5229 115.618 73.4526 116.04 73.312C116.461 73.1636 116.813 73.0034 117.094 72.8315C117.375 72.6519 117.668 72.4917 117.973 72.3511C118.278 72.2026 118.528 72.1284 118.723 72.1284C119.09 72.1284 119.418 72.2847 119.708 72.5972C119.997 72.9019 120.141 73.2417 120.141 73.6167C120.141 74.0933 119.848 74.562 119.262 75.0229C118.684 75.4839 117.954 75.855 117.071 76.1362C116.196 76.4097 115.336 76.5464 114.493 76.5464C112.571 76.5464 111.008 75.9214 109.805 74.6714C108.61 73.4136 108.012 71.8198 108.012 69.8901C108.012 68.7183 108.27 67.6245 108.786 66.6089C109.309 65.5933 110.047 64.7729 111 64.1479C111.961 63.5151 113.032 63.1987 114.211 63.1987C115.11 63.1987 115.954 63.3901 116.743 63.7729C117.54 64.1558 118.2 64.6519 118.723 65.2612C119.254 65.8706 119.668 66.5464 119.965 67.2886C120.27 68.0229 120.422 68.7534 120.422 69.48C120.422 70.0034 120.301 70.394 120.059 70.6519C119.817 70.9019 119.434 71.0269 118.911 71.0269ZM111.469 68.7183H116.965C116.872 67.937 116.583 67.3042 116.098 66.8198C115.622 66.3276 114.993 66.0815 114.211 66.0815C113.461 66.0815 112.836 66.3315 112.336 66.8315C111.844 67.3315 111.555 67.9604 111.469 68.7183ZM124.533 74.4722V65.2612C124.533 64.6909 124.693 64.23 125.013 63.8784C125.334 63.519 125.748 63.3394 126.255 63.3394C126.701 63.3394 127.06 63.4526 127.334 63.6792C127.615 63.9058 127.787 64.2261 127.849 64.6401C128.74 63.6792 129.81 63.1987 131.06 63.1987C132.513 63.1987 133.705 63.7808 134.634 64.9448C135.103 64.4136 135.673 63.9917 136.345 63.6792C137.025 63.3589 137.67 63.1987 138.279 63.1987C139.716 63.1987 140.865 63.605 141.724 64.4175C142.584 65.2222 143.013 66.3667 143.013 67.8511V74.4722C143.013 75.0425 142.849 75.5073 142.521 75.8667C142.201 76.2183 141.787 76.394 141.279 76.394C140.771 76.394 140.357 76.2183 140.037 75.8667C139.716 75.5073 139.556 75.0425 139.556 74.4722V68.4487C139.556 67.7456 139.373 67.1753 139.005 66.7378C138.646 66.3003 138.158 66.0815 137.541 66.0815C136.908 66.0815 136.408 66.3003 136.041 66.7378C135.681 67.1675 135.502 67.7378 135.502 68.4487V74.4722C135.502 75.0425 135.338 75.5073 135.009 75.8667C134.689 76.2183 134.275 76.394 133.767 76.394C133.259 76.394 132.845 76.2183 132.525 75.8667C132.205 75.5073 132.045 75.0425 132.045 74.4722V68.4487C132.045 67.7456 131.861 67.1753 131.494 66.7378C131.134 66.3003 130.646 66.0815 130.029 66.0815C129.349 66.0815 128.838 66.2964 128.494 66.7261C128.158 67.1479 127.99 67.7222 127.99 68.4487V74.4722C127.99 75.0425 127.826 75.5073 127.498 75.8667C127.177 76.2183 126.763 76.394 126.255 76.394C125.748 76.394 125.334 76.2183 125.013 75.8667C124.693 75.5073 124.533 75.0425 124.533 74.4722ZM150.803 75.2456L146.983 65.7183C146.874 65.4058 146.819 65.1089 146.819 64.8276C146.819 64.4136 146.995 64.062 147.346 63.7729C147.698 63.4839 148.065 63.3394 148.448 63.3394C149.292 63.3394 149.87 63.7495 150.182 64.5698L152.55 71.0737L155.092 64.5698C155.405 63.7495 155.983 63.3394 156.827 63.3394C157.21 63.3394 157.577 63.4839 157.928 63.7729C158.28 64.062 158.456 64.4136 158.456 64.8276C158.456 65.1714 158.401 65.4683 158.292 65.7183L152.503 80.1206C152.128 81.0269 151.585 81.48 150.874 81.48C150.319 81.48 149.878 81.3315 149.55 81.0347C149.229 80.7378 149.069 80.3901 149.069 79.9917C149.069 79.7183 149.143 79.3823 149.292 78.9839L150.803 75.2456Z"
        fill="#7DD3FC"
      />
      <path
        d="M33.4297 20.4956C34.0391 20.4956 34.7109 20.5425 35.4453 20.6362C36.1953 20.7144 37.0156 20.8706 37.9062 21.105C38.7969 21.3394 39.5938 21.6284 40.2969 21.9722C41.0156 22.3159 41.6172 22.7769 42.1016 23.355C42.5859 23.9331 42.8281 24.5815 42.8281 25.3003C42.8281 26.269 42.5312 27.105 41.9375 27.8081C41.3438 28.5112 40.5703 28.8628 39.6172 28.8628C39.0391 28.8628 38.0859 28.6206 36.7578 28.1362C35.4453 27.6519 34.2734 27.4097 33.2422 27.4097C32.1484 27.4097 31.2188 27.6909 30.4531 28.2534C29.6875 28.8003 29.3047 29.5581 29.3047 30.5269C29.3047 31.0425 29.4844 31.5034 29.8438 31.9097C30.2188 32.3003 30.7109 32.6284 31.3203 32.894C31.9453 33.1597 32.6562 33.4097 33.4531 33.644C34.2656 33.8784 35.1094 34.1362 35.9844 34.4175C36.875 34.6831 37.7578 34.9878 38.6328 35.3315C39.5234 35.6597 40.3672 36.0894 41.1641 36.6206C41.9766 37.1519 42.6875 37.769 43.2969 38.4722C43.9219 39.1597 44.4141 40.0347 44.7734 41.0972C45.1484 42.1597 45.3359 43.355 45.3359 44.6831C45.3359 46.9019 44.7656 48.8706 43.625 50.5894C42.5 52.3081 41.0078 53.6128 39.1484 54.5034C37.3047 55.394 35.2734 55.8394 33.0547 55.8394C32.3672 55.8394 31.6484 55.8081 30.8984 55.7456C30.1484 55.6831 29.3125 55.5815 28.3906 55.4409C27.4688 55.3159 26.6094 55.1206 25.8125 54.855C25.0156 54.5737 24.2734 54.2456 23.5859 53.8706C22.9141 53.48 22.375 52.9956 21.9688 52.4175C21.5781 51.8237 21.3828 51.1675 21.3828 50.4487C21.3828 49.48 21.6719 48.6753 22.25 48.0347C22.8438 47.3784 23.625 47.0503 24.5938 47.0503C25.2656 47.0503 26.5 47.3628 28.2969 47.9878C30.0938 48.6128 31.5469 48.9253 32.6562 48.9253C34.1875 48.9253 35.3828 48.5425 36.2422 47.7769C37.1172 47.0112 37.5547 46.019 37.5547 44.8003C37.5547 44.2065 37.3672 43.6831 36.9922 43.23C36.6328 42.7769 36.1406 42.4019 35.5156 42.105C34.9062 41.8081 34.1953 41.5347 33.3828 41.2847C32.5859 41.0347 31.7422 40.7847 30.8516 40.5347C29.9766 40.2847 29.0938 40.0112 28.2031 39.7144C27.3281 39.4019 26.4844 39.0112 25.6719 38.5425C24.875 38.0737 24.1641 37.5347 23.5391 36.9253C22.9297 36.3159 22.4375 35.5425 22.0625 34.605C21.7031 33.6519 21.5234 32.5815 21.5234 31.394C21.5234 29.2222 22.0703 27.3003 23.1641 25.6284C24.2734 23.9409 25.7266 22.6675 27.5234 21.8081C29.3203 20.9331 31.2891 20.4956 33.4297 20.4956ZM54.8497 51.8081L48.7559 25.5815C48.6153 24.9565 48.545 24.4175 48.545 23.9644C48.545 23.1362 48.8653 22.4019 49.5059 21.7612C50.1466 21.1206 50.9669 20.8003 51.9669 20.8003C54.0763 20.8003 55.3575 21.9487 55.8106 24.2456L59.8888 44.6362H59.9825L66.2169 23.6128C66.4825 22.7378 66.9513 22.0503 67.6231 21.5503C68.295 21.0503 69.0763 20.8003 69.9669 20.8003C70.8575 20.8003 71.6388 21.0503 72.3106 21.5503C72.9825 22.0503 73.4513 22.7378 73.7169 23.6128L79.9513 44.6362H80.045L84.1231 24.2456C84.5763 21.9487 85.8575 20.8003 87.9669 20.8003C88.9669 20.8003 89.7794 21.1206 90.4044 21.7612C91.045 22.4019 91.3653 23.1362 91.3653 23.9644C91.3653 24.48 91.3028 25.019 91.1778 25.5815L85.0841 51.8081C84.8341 52.8862 84.295 53.7769 83.4669 54.48C82.6544 55.1831 81.6075 55.5347 80.3263 55.5347C79.1856 55.5347 78.1778 55.2065 77.3028 54.5503C76.4434 53.894 75.8653 53.0581 75.5684 52.0425L70.0138 33.5034H69.92L64.3419 52.0425C64.045 53.0581 63.4591 53.894 62.5841 54.5503C61.7247 55.2065 60.7247 55.5347 59.5841 55.5347C58.3028 55.5347 57.2559 55.1831 56.4434 54.48C55.6309 53.7769 55.0997 52.8862 54.8497 51.8081ZM91.4337 50.5894L101.09 24.48C101.527 23.3237 102.199 22.3706 103.106 21.6206C104.012 20.8706 105.051 20.4956 106.223 20.4956C107.457 20.4956 108.512 20.8628 109.387 21.5972C110.262 22.3159 110.918 23.2769 111.356 24.48L120.777 50.5894C121.027 51.2769 121.152 51.8706 121.152 52.3706C121.152 53.2925 120.824 54.0503 120.168 54.644C119.527 55.2378 118.754 55.5347 117.848 55.5347C116.051 55.5347 114.879 54.7065 114.332 53.0503L112.902 48.5269H99.5666L98.1134 53.0034C97.5822 54.6909 96.4337 55.5347 94.6681 55.5347C93.6994 55.5347 92.8634 55.2144 92.1603 54.5737C91.4572 53.9331 91.1056 53.1362 91.1056 52.1831C91.1056 51.6675 91.215 51.1362 91.4337 50.5894ZM106.176 27.9956L101.629 41.9175H110.746L106.27 27.9956H106.176ZM125.323 51.8081V24.8315C125.323 23.6909 125.651 22.7847 126.307 22.1128C126.979 21.4253 127.901 21.0815 129.073 21.0815H137.557C141.119 21.0815 144.057 22.144 146.369 24.269C148.698 26.3784 149.862 29.1362 149.862 32.5425C149.862 34.2456 149.541 35.8237 148.901 37.2769C148.276 38.7144 147.416 39.9175 146.323 40.8862C145.244 41.8394 143.971 42.5894 142.502 43.1362C141.049 43.6675 139.502 43.9331 137.862 43.9331H132.518V51.8081C132.518 52.98 132.182 53.894 131.51 54.5503C130.854 55.2065 129.994 55.5347 128.932 55.5347C127.869 55.5347 127.002 55.2065 126.33 54.5503C125.658 53.894 125.323 52.98 125.323 51.8081ZM132.518 27.4097V37.5815H137.416C138.901 37.5815 140.096 37.105 141.002 36.1519C141.908 35.1831 142.362 33.9644 142.362 32.4956C142.362 31.0269 141.908 29.8159 141.002 28.8628C140.096 27.894 138.901 27.4097 137.416 27.4097H132.518Z"
        fill="#0EA5E9"
      />
      <path
        d="M19.5577 28.9768C20.7511 20.0562 29.4934 17.7145 34.4492 18.3775L31.0968 12.4287L24.5747 19.5479L15.2612 21.353L19.5577 28.9768Z"
        fill="#0EA5E9"
        stroke="#0EA5E9"
      />
      <path
        d="M19.4197 10.4005L11.8006 19.2858L23.1019 16.9343L30.9666 8.48457L19.4197 10.4005Z"
        fill="#0EA5E9"
      />
      <path
        d="M11.8006 19.2858L19.4197 10.4005L30.9666 8.48457L23.1019 16.9343L11.8006 19.2858ZM11.8006 19.2858L11.7337 29.6489M11.7337 29.6489L11.268 29.6489L11.7142 30.2534L12.1738 29.6489L11.7337 29.6489Z"
        stroke="#0EA5E9"
      />
    </svg>
  );
}

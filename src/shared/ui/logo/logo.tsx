import clsx from 'clsx'

interface ILogoProps {
  className?: string
}

export const Logo = ({ className }: ILogoProps) => {
  return (
    <div className={clsx('logo', className)}>
      <svg
        width="160"
        height="145"
        viewBox="0 0 160 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70.4916 44.4244C67.8796 45.4278 65.6575 48.3607 65.6575 50.8692C65.6575 52.7988 67.4118 55.7704 69.2441 56.8896C72.5968 58.9735 76.1444 58.2789 78.4834 55.0758C79.8869 53.1847 80.2377 51.7568 79.8869 49.4799C79.2631 45.3506 74.624 42.8421 70.4916 44.4244Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.3203 0.352313C62.2659 0.622457 56.2233 1.70303 52.2079 2.89938C47.0229 4.40447 39.226 7.6462 36.0293 9.61439C31.741 12.2386 29.5579 13.628 29.4019 13.8209C29.285 13.9367 28.7002 14.3612 28.0375 14.7471C24.4509 16.9855 16.8489 24.5109 13.5742 29.1033C10.5724 33.3099 9.79274 34.5448 8.03844 37.9795C4.41288 45.0418 3.00944 49.0168 1.06022 58.0087C0.124589 62.2539 0.0466196 63.4502 0.00763507 72.2878C-0.0313494 81.4727 0.0466196 82.1287 1.02123 86.3739C2.1128 90.8505 4.3739 98.2988 5.1146 99.6881C5.34851 100.113 5.93328 101.425 6.44008 102.582C6.94688 103.74 7.84352 105.515 8.42829 106.519L9.48087 108.333L9.71477 139.824L10.8843 141.56C11.547 142.487 12.7556 143.683 13.6132 144.146C17.1998 146.153 20.4745 144.764 27.0629 138.473C27.4451 138.107 27.8302 137.737 28.2106 137.373L28.2156 137.368C30.2776 135.391 32.2016 133.546 32.7936 132.993L34.0021 131.835L35.3666 132.839C36.0683 133.379 36.809 133.842 36.9649 133.842C37.1599 133.842 37.7446 134.151 38.2904 134.537C39.1871 135.154 42.3058 136.543 48.4264 139.091C50.9994 140.171 58.9132 142.024 63.9032 142.757C83.4345 145.535 104.72 140.133 119.651 128.632C123.861 125.352 133.491 115.549 133.491 114.507C133.491 114.353 133.724 113.967 133.997 113.697C136.103 111.497 141.132 102.312 142.808 97.5655C143.315 96.1762 143.86 94.7097 144.055 94.2852C144.601 93.0503 145.81 88.0719 146.784 83.2865C147.993 77.0732 147.993 66.2674 146.784 60.9803L146.733 60.7596C146.108 58.0855 145.826 56.8783 145.062 56.3336C144.434 55.8854 143.479 55.8857 141.738 55.8862L141.56 55.8862C137.467 55.8862 136.531 56.3493 135.83 58.742C135.479 60.0155 135.479 61.2505 135.791 63.8361C137.506 77.6135 134.075 92.7801 126.746 104.126C119.261 115.704 107.995 124.387 95.0908 128.594C89.3991 130.407 86.0074 131.063 79.575 131.604C73.6104 132.105 65.6185 131.642 60.7845 130.562C57.4318 129.79 48.3874 126.895 48.6213 126.664C48.8162 126.471 52.6367 125.468 58.9522 124.001C70.4526 121.3 79.3021 116.553 86.1634 109.375C90.9585 104.319 92.089 102.814 94.4281 98.3374C98.4825 90.619 99.9639 83.8268 99.9639 73.021V65.6114L101.25 64.608C101.362 64.5168 101.48 64.4213 101.599 64.3241L101.62 64.3066L101.621 64.3063L101.622 64.3053L101.622 64.305C102.204 63.8316 102.827 63.3245 103.083 63.1029C103.284 62.9288 104.068 62.2897 105.08 61.4647L105.081 61.464C105.639 61.0092 106.266 60.498 106.903 59.9769C111.386 56.3107 111.269 55.5775 105.812 51.7954C100.471 48.0906 99.652 47.3188 99.1452 45.2734C98.2486 41.53 95.0518 36.0499 91.9331 32.924C83.9413 24.8196 73.6493 21.0762 62.7727 22.2726C54.7029 23.1602 46.2822 27.4439 40.7464 33.4256C39.1091 35.2395 35.4445 40.7195 35.0547 41.9931C34.8988 42.5334 34.6259 43.1508 34.4309 43.3824C33.9631 43.9613 32.6377 48.3993 32.3648 50.2903C32.2478 51.1394 32.1309 54.96 32.0919 58.742L32.0529 65.6886L30.4545 67.2708C26.4001 71.1686 19.9287 75.8768 14.4709 78.8484L11.9369 80.2377L11.625 78.9642C11.4691 78.2695 11.3521 74.912 11.3521 71.5159C11.3911 63.566 12.5606 56.851 15.1726 49.7115C16.4981 46.0452 18.7982 41.4914 20.5135 39.0987C20.7392 38.771 21.0519 38.3284 21.3958 37.8418C21.9428 37.0676 22.5687 36.1819 23.0475 35.471C28.7002 27.2895 41.1753 18.2976 51.6231 14.8629C60.0827 12.1229 62.7727 11.6984 72.4798 11.6984C81.8751 11.6984 85.5006 12.3544 92.245 15.133C93.6094 15.7119 93.7264 15.7119 94.1162 15.0173C94.3111 14.5928 94.5061 14.0525 94.5061 13.8209C94.5061 13.5508 94.74 12.8175 95.0518 12.1615C95.3637 11.4668 96.1044 9.80735 96.6502 8.41804C97.235 7.02873 97.8977 5.678 98.0926 5.40786L98.1316 5.36345C98.2915 5.18148 98.3953 5.06347 98.3855 4.95557C98.3674 4.75654 97.9631 4.59189 96.8131 4.12352L96.6502 4.05714C92.7128 2.47487 84.3701 0.738225 78.2885 0.313713L78.1806 0.305929C75.3744 0.10355 73.9404 0.000127983 72.5064 1.19501e-07C71.0076 -0.000133961 69.5088 0.11256 66.4437 0.343033L66.3203 0.352313ZM74.585 34.2361C75.9884 34.6992 77.3919 35.2781 77.7037 35.5482C78.0546 35.8184 78.8733 36.2815 79.497 36.5902C80.1598 36.8989 81.7971 38.2882 83.2006 39.6776C85.7345 42.186 87.4109 44.9261 88.2296 47.9748C88.7753 50.0202 88.8143 77.3819 88.2296 81.0868C86.982 89.4612 83.8243 95.7903 77.9766 101.618C71.3103 108.256 64.2541 111.613 51.6231 114.199C49.5959 114.623 46.945 115.241 45.7754 115.549C33.6902 118.946 28.7782 121.377 23.2034 126.78C22.0339 127.899 21.0203 128.825 20.9423 128.825C20.8643 128.825 20.8254 120.991 20.8254 111.459C20.8254 97.8357 20.9423 94.0923 21.3322 94.0923C21.5661 94.0923 22.3068 94.3624 22.9695 94.7097C23.5933 95.0185 25.9713 95.9061 28.2324 96.6779C38.8362 100.19 49.401 100.46 56.4572 97.3726C63.6693 94.208 68.0746 89.4226 70.2967 82.3217C73.6493 71.6317 66.0474 59.8226 54.8198 58.2789C51.6621 57.8158 47.1009 58.2403 45.2686 59.1665C42.9685 60.3243 42.8906 60.2085 43.1635 55.3845C43.3974 51.1008 43.8262 49.4413 45.6585 45.4663C48.2315 39.9477 55.0148 34.9307 61.7981 33.5028C64.7219 32.8854 71.7781 33.3099 74.585 34.2361ZM55.7944 69.8179C59.459 71.5545 60.8624 76.4557 58.9522 80.6622C57.2369 84.2899 54.2741 86.644 49.5959 87.9175C46.0483 88.8823 44.372 88.8823 39.421 87.879C36.1852 87.2615 27.2188 84.6758 26.751 84.2513C26.634 84.1741 29.207 82.5147 29.9867 82.1673C31.0783 81.7042 39.6939 75.4523 40.7074 74.4103C41.0193 74.1016 45.0737 71.1686 46.2043 70.474C48.7772 68.8531 53.1825 68.5444 55.7944 69.8179Z"
          fill="currentColor"
        />
        <path
          d="M119.807 22.2726C118.131 23.932 118.209 26.1703 120.002 27.9456C121.795 29.7208 123.939 29.798 125.772 28.1385C126.863 27.1737 127.019 26.8264 127.019 25.0126C127.019 22.2726 125.811 21.1534 122.926 21.1534C121.288 21.1534 120.782 21.3463 119.807 22.2726Z"
          fill="currentColor"
        />
        <path
          d="M136.141 28.2929C134.231 26.5563 134.231 23.3917 136.103 21.9252C138.013 20.4587 141.365 21.0376 142.574 23.083C143.665 24.8582 143.432 26.3633 141.872 27.907C140.079 29.6436 137.779 29.798 136.141 28.2929Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M101.406 13.9753C103.161 8.84254 107.059 4.94474 112.439 2.93796C115.012 2.01175 143.743 1.93457 146.979 2.86078C149.981 3.7098 152.398 5.1377 154.737 7.45322C158.986 11.6598 160 15.1716 160 25.2827C159.961 29.0647 159.766 32.731 159.454 34.0817C158.09 40.3722 152.398 45.8137 146.005 47.01C144.874 47.203 140.82 47.3959 136.999 47.3959H130.099L127.448 50.0974C123.004 54.6898 121.678 55.616 119.222 55.809C117.39 55.9634 116.883 55.8476 115.597 54.96C113.725 53.6478 113.219 52.5673 113.219 49.7886C113.219 47.5889 113.18 47.5503 111.854 47.0486C107.176 45.3892 102.966 40.9125 101.445 36.0113C100.471 32.731 100.393 16.8697 101.406 13.9753ZM148.188 16.4066C147.681 15.5961 146.784 14.5927 146.122 14.2068C145.069 13.4736 144.211 13.435 130.567 13.4736L130.563 13.4736C114.154 13.5122 114.076 13.5123 112.829 16.2522C112.166 17.6415 112.049 18.7993 112.049 24.7424C112.049 30.7242 112.127 31.8048 112.79 33.0397C113.725 34.8535 116.064 36.2043 118.248 36.2043H119.846V39.7547L119.885 43.3438L123.316 39.7547L126.746 36.2043H135.284C143.51 36.2043 143.899 36.1657 145.576 35.3166C146.823 34.6606 147.603 33.8887 148.227 32.6924C149.006 31.1487 149.084 30.5312 149.084 24.4337C149.084 18.259 149.045 17.7959 148.188 16.4066Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

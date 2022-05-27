export default function MovieTimeInfo({
  movieTime,
  movieHall,
  cosy,
  special,
}: {
  movieTime: string
  movieHall: string
  cosy: boolean
  special: boolean
}) {
  const time = movieTime.substring(11, 16)
  //console.log(time)
  //console.log(movieHall)
  //console.log(cosy)
  //console.log(special)

  return (
    <div className="w-2/4 text-alpha-xxx-light dark:text-gray font-proxima">
      <p className="dark:text-warning text-error  font-bold text-3xl">{time}</p>
      <p className="text-base">Zaal {movieHall}</p>
      <div className="flex space-x-2 mt-1">
        {special == true ? (
          <div className="w-3">
            <svg
              className="fill-alpha-xxx-light dark:fill-gray"
              viewBox="0 0 1020.000000 1280.000000"
            >
              <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                <path d="M3328 12785 c-664 -108 -1088 -776 -902 -1422 101 -350 391 -650 732 -757 296 -93 575 -72 847 64 226 113 392 278 505 505 82 165 110 276 117 465 4 123 2 161 -17 250 -92 451 -428 790 -875 885 -108 23 -298 28 -407 10z" />
                <path d="M3435 10334 c-11 -2 -45 -9 -75 -15 -194 -38 -383 -142 -534 -292 -199 -197 -307 -440 -322 -722 -5 -89 4 -266 66 -1330 6 -93 37 -638 70 -1210 48 -828 64 -1059 80 -1133 71 -335 297 -616 617 -767 77 -37 210 -79 308 -97 42 -8 628 -12 1955 -15 l1895 -4 131 -227 c1009 -1750 1375 -2380 1403 -2415 92 -111 233 -198 378 -232 102 -25 262 -17 360 18 334 116 510 486 395 830 -23 68 -221 416 -992 1748 -530 915 -980 1689 -1000 1719 -83 122 -225 224 -375 267 -56 17 -164 18 -1511 21 l-1451 2 -6 173 c-4 94 -10 286 -14 425 l-6 252 1044 0 c901 0 1053 2 1104 15 266 68 437 315 396 573 -28 185 -147 329 -334 405 -52 22 -54 22 -1162 27 l-1110 5 -8 105 c-35 487 -70 907 -78 965 -23 145 -92 317 -182 450 -99 146 -299 310 -461 378 -149 63 -227 79 -401 83 -88 1 -169 1 -180 -2z" />
                <path d="M1880 7729 c-527 -357 -957 -808 -1283 -1346 -564 -930 -737 -2072 -477 -3148 253 -1044 888 -1944 1790 -2540 1026 -677 2306 -870 3489 -528 1011 292 1897 976 2444 1887 108 181 240 444 232 464 -11 31 -580 1012 -586 1012 -4 0 -12 -28 -19 -62 -18 -95 -84 -308 -136 -443 -359 -924 -1102 -1640 -2034 -1960 -650 -222 -1370 -234 -2044 -34 -715 213 -1381 707 -1804 1339 -289 433 -462 892 -538 1430 -26 178 -26 683 -1 855 36 247 83 444 153 646 174 499 439 918 825 1300 l167 167 -29 498 c-16 275 -29 507 -29 517 0 9 -3 17 -7 17 -5 0 -55 -32 -113 -71z" />
              </g>
            </svg>
          </div>
        ) : (
          ''
        )}

        <div className="text-xs">
          {cosy == true ? (
            <svg
              className="w-3 dark:fill-gray fill-alpha-xxx-light"
              viewBox="0 0 124.74 142.15"
            >
              <path d="M0,31.09C0,12.62,14,0,31.54,0c13.7,0,21.37,7.21,25.6,14.69l-11,5.41a16.48,16.48,0,0,0-14.61-8.74c-10.45,0-18.38,8.38-18.38,19.73s7.93,19.74,18.38,19.74a16.31,16.31,0,0,0,14.61-8.74l11,5.32c-4.33,7.48-11.9,14.78-25.6,14.78C14,62.19,0,49.57,0,31.09Z" />
              <path d="M93.29,0c18.21,0,31.45,13,31.45,31.09s-13.24,31.1-31.45,31.1-31.36-13-31.36-31.1S75.17,0,93.29,0Zm0,11.36c-11.09,0-18.21,8.47-18.21,19.73S82.2,50.83,93.29,50.83s18.3-8.56,18.3-19.74S104.38,11.36,93.29,11.36Z" />
              <path d="M8.1,119.91a30.41,30.41,0,0,0,22,9.35c8.1,0,12.05-3.84,12.05-7.79,0-5.19-6-7-14-8.83C16.83,110,2.28,106.93,2.28,91.45c0-11.54,10-20.89,26.29-20.89,11,0,20.16,3.33,27,9.67L47.37,91a29.56,29.56,0,0,0-19.84-7.58c-6.65,0-10.18,2.91-10.18,7.06,0,4.68,5.82,6.13,13.82,8,11.43,2.6,26,6,26,21.4,0,12.68-9,22.24-27.74,22.24-13.3,0-22.86-4.47-29.4-11Z" />
              <path d="M86.61,140.53V114.31L61.93,76.46H77.49l15.94,25.75,15.75-25.75h15.56l-24.49,37.85v26.22Z" />
            </svg>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

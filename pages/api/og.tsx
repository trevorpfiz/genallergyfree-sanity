import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#FEED00',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          border: 'none',
        }}
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="500.000000pt"
          height="500.000000pt"
          viewBox="0 0 500 500"
          enableBackground="new 0 0 500 500"
          xmlSpace="preserve"
        >
          <path
            fill="#FEED00"
            opacity="1.000000"
            stroke="none"
            d="
M273.000000,501.000000
C182.000015,501.000000 91.500046,501.000000 1.000049,501.000000 C1.000032,334.333405 1.000032,167.666794 1.000016,1.000138
C167.666565,1.000092 334.333130,1.000092 500.999756,1.000046
C500.999847,167.666519 500.999847,334.333038 500.999939,500.999786
C425.166656,501.000000 349.333344,501.000000 273.000000,501.000000
M56.604782,304.910461
C65.846794,312.174408 76.240562,316.081085 88.084839,315.165314
C90.937416,314.944763 91.797523,316.215637 92.728767,318.389587
C103.259987,342.974304 118.351112,364.369843 139.019287,381.364075
C189.121399,422.560089 245.574921,433.647308 306.992065,413.101471
C354.556854,397.189606 388.150055,364.729309 408.767670,319.003937
C410.038086,316.186371 411.151093,315.033356 414.490448,315.238464
C433.886566,316.429871 452.666656,303.411224 459.475647,284.395569
C466.177032,265.680450 459.786072,243.026520 443.735138,232.209290
C436.754517,227.504822 428.482971,224.715820 420.037872,220.695099
C413.596222,185.808228 398.087921,155.432587 373.371124,130.166885
C309.360138,64.734306 204.952789,61.308704 136.173203,122.669861
C107.311432,148.418655 89.116760,180.495346 81.867622,218.594284
C81.293114,221.613754 80.120636,222.765747 77.029465,223.570312
C71.786514,224.934937 66.388527,226.653061 61.806137,229.451431
C33.273739,246.875702 33.089088,285.509338 56.604782,304.910461
z"
          />
          <path
            fill="#040400"
            opacity="1.000000"
            stroke="none"
            d="
M56.334480,304.681030
C33.089088,285.509338 33.273739,246.875702 61.806137,229.451431
C66.388527,226.653061 71.786514,224.934937 77.029465,223.570312
C80.120636,222.765747 81.293114,221.613754 81.867622,218.594284
C89.116760,180.495346 107.311432,148.418655 136.173203,122.669861
C204.952789,61.308704 309.360138,64.734306 373.371124,130.166885
C398.087921,155.432587 413.596222,185.808228 420.037872,220.695099
C428.482971,224.715820 436.754517,227.504822 443.735138,232.209290
C459.786072,243.026520 466.177032,265.680450 459.475647,284.395569
C452.666656,303.411224 433.886566,316.429871 414.490448,315.238464
C411.151093,315.033356 410.038086,316.186371 408.767670,319.003937
C388.150055,364.729309 354.556854,397.189606 306.992065,413.101471
C245.574921,433.647308 189.121399,422.560089 139.019287,381.364075
C118.351112,364.369843 103.259987,342.974304 92.728767,318.389587
C91.797523,316.215637 90.937416,314.944763 88.084839,315.165314
C76.240562,316.081085 65.846794,312.174408 56.334480,304.681030
M246.093948,179.910339
C262.944550,182.220200 277.267242,177.243484 287.816589,163.877548
C298.759705,150.012756 300.521942,134.375198 293.061188,118.335739
C285.281616,101.610985 271.400146,93.354744 253.215424,93.131691
C211.225235,92.616653 174.351089,106.491425 143.689880,135.116882
C110.721870,165.895996 93.613632,204.173004 93.015999,249.530914
C92.949051,254.612091 89.953293,257.973083 85.745918,257.833557
C81.697853,257.699371 79.057693,254.541901 78.966385,249.572906
C78.896538,245.772354 78.952499,241.969513 78.952499,237.922897
C77.682037,238.138794 76.688766,238.191589 75.770020,238.480972
C59.775555,243.518677 50.431946,260.715240 54.790039,277.045532
C59.296608,293.932190 75.607864,304.155243 92.251244,300.524292
C98.549568,299.150238 100.940056,300.459503 103.044945,306.133484
C130.256287,379.485229 207.442627,422.617218 285.103485,404.731079
C340.261749,392.027527 378.201233,358.191345 398.992310,305.394623
C400.922394,300.493469 403.561676,299.180511 409.280975,300.426300
C423.023346,303.419678 437.038696,297.040497 444.014191,284.617310
C450.726288,272.663177 448.843445,256.997406 439.291565,247.096603
C434.682373,242.319077 429.399597,238.551758 422.106140,237.871094
C422.373535,242.015808 422.713745,245.652206 422.817169,249.295319
C422.955353,254.162125 420.341095,257.454865 416.269806,257.825745
C412.320374,258.185486 409.216309,255.107224 408.777954,250.297012
C408.203796,243.996399 407.991913,237.647354 407.103027,231.393204
C399.139191,175.359375 369.587921,134.642151 319.469971,108.752991
C313.163330,105.495216 306.343567,103.230713 299.761566,100.506004
C318.778107,126.275650 314.214294,163.104218 289.387207,182.231613
C263.339264,202.299561 226.889252,197.783875 207.573578,172.095932
C204.119934,167.502930 204.141052,163.434113 207.633270,160.590775
C211.079758,157.784668 215.047363,158.572449 218.702072,163.238815
C225.562225,171.997940 234.373062,177.481277 246.093948,179.910339 z"
          />
          <path
            fill="#FDEC00"
            opacity="1.000000"
            stroke="none"
            d="
M245.658417,179.837860
C234.373062,177.481277 225.562225,171.997940 218.702072,163.238815
C215.047363,158.572449 211.079758,157.784668 207.633270,160.590775
C204.141052,163.434113 204.119934,167.502930 207.573578,172.095932
C226.889252,197.783875 263.339264,202.299561 289.387207,182.231613
C314.214294,163.104218 318.778107,126.275650 299.761566,100.506004
C306.343567,103.230713 313.163330,105.495216 319.469971,108.752991
C369.587921,134.642151 399.139191,175.359375 407.103027,231.393204
C407.991913,237.647354 408.203796,243.996399 408.777954,250.297012
C409.216309,255.107224 412.320374,258.185486 416.269806,257.825745
C420.341095,257.454865 422.955353,254.162125 422.817169,249.295319
C422.713745,245.652206 422.373535,242.015808 422.106140,237.871094
C429.399597,238.551758 434.682373,242.319077 439.291565,247.096603
C448.843445,256.997406 450.726288,272.663177 444.014191,284.617310
C437.038696,297.040497 423.023346,303.419678 409.280975,300.426300
C403.561676,299.180511 400.922394,300.493469 398.992310,305.394623
C378.201233,358.191345 340.261749,392.027527 285.103485,404.731079
C207.442627,422.617218 130.256287,379.485229 103.044945,306.133484
C100.940056,300.459503 98.549568,299.150238 92.251244,300.524292
C75.607864,304.155243 59.296608,293.932190 54.790039,277.045532
C50.431946,260.715240 59.775555,243.518677 75.770020,238.480972
C76.688766,238.191589 77.682037,238.138794 78.952499,237.922897
C78.952499,241.969513 78.896538,245.772354 78.966385,249.572906
C79.057693,254.541901 81.697853,257.699371 85.745918,257.833557
C89.953293,257.973083 92.949051,254.612091 93.015999,249.530914
C93.613632,204.173004 110.721870,165.895996 143.689880,135.116882
C174.351089,106.491425 211.225235,92.616653 253.215424,93.131691
C271.400146,93.354744 285.281616,101.610985 293.061188,118.335739
C300.521942,134.375198 298.759705,150.012756 287.816589,163.877548 C277.267242,177.243484 262.944550,182.220200 245.658417,179.837860
M255.371948,375.077515
C271.507385,373.569519 286.640442,368.769287 295.921234,354.890900
C304.532043,342.014374 310.251923,327.465881 309.246765,311.491333
C298.957062,311.491333 289.655365,311.541931 280.354431,311.480835
C260.541443,311.350677 240.728958,311.144379 220.916000,311.007538
C213.589172,310.956940 206.255707,310.836121 198.936279,311.078949
C193.286194,311.266388 192.216995,312.904633 193.477173,318.361328
C195.009979,324.998657 196.468384,331.657715 198.204651,338.242615
C203.095718,356.792267 214.585632,368.792694 233.636047,372.636505
C240.454819,374.012360 247.487457,374.328278 255.371948,375.077515
M207.176025,285.857391
C216.178482,278.743652 218.266754,267.593750 212.208710,258.986572
C206.412567,250.751465 194.957520,248.582993 186.467056,254.113617
C178.013870,259.619965 175.331467,270.993042 180.451706,279.617889
C185.822250,288.664337 196.530106,291.366547 207.176025,285.857391
M305.903900,251.142624
C304.449890,251.478378 302.947906,251.678131 301.549591,252.171631
C291.520355,255.711075 286.396576,267.188629 290.379120,277.081451
C294.289368,286.794861 305.543091,291.524261 315.194000,287.510040
C323.311707,284.133484 328.250641,275.326050 326.736908,266.925812
C324.995392,257.261597 317.388580,251.232101 305.903900,251.142624
z"
          />
          <path
            fill="#020200"
            opacity="1.000000"
            stroke="none"
            d="
M254.897217,375.102722
C247.487457,374.328278 240.454819,374.012360 233.636047,372.636505
C214.585632,368.792694 203.095718,356.792267 198.204651,338.242615
C196.468384,331.657715 195.009979,324.998657 193.477173,318.361328
C192.216995,312.904633 193.286194,311.266388 198.936279,311.078949
C206.255707,310.836121 213.589172,310.956940 220.916000,311.007538
C240.728958,311.144379 260.541443,311.350677 280.354431,311.480835
C289.655365,311.541931 298.957062,311.491333 309.246765,311.491333
C310.251923,327.465881 304.532043,342.014374 295.921234,354.890900
C286.640442,368.769287 271.507385,373.569519 254.897217,375.102722
z"
          />
          <path
            fill="#030300"
            opacity="1.000000"
            stroke="none"
            d="
M206.839783,286.024780
C196.530106,291.366547 185.822250,288.664337 180.451706,279.617889
C175.331467,270.993042 178.013870,259.619965 186.467056,254.113617
C194.957520,248.582993 206.412567,250.751465 212.208710,258.986572
C218.266754,267.593750 216.178482,278.743652 206.839783,286.024780
z"
          />
          <path
            fill="#020200"
            opacity="1.000000"
            stroke="none"
            d="
M306.324097,251.110718
C317.388580,251.232101 324.995392,257.261597 326.736908,266.925812
C328.250641,275.326050 323.311707,284.133484 315.194000,287.510040
C305.543091,291.524261 294.289368,286.794861 290.379120,277.081451
C286.396576,267.188629 291.520355,255.711075 301.549591,252.171631
C302.947906,251.678131 304.449890,251.478378 306.324097,251.110718
z"
          />
        </svg>
        <p
          style={{
            margin: 0,
          }}
        >
          Generation Allergy Free
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
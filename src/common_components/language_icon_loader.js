import {useContext} from "react";
import {DarkModeContext} from "../DarkMode";

const lightColor = "#F8F8F8";
export const Python = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none">
        <mask id="mask0_188_46" style={{"mask-type": "luminance"}}
              maskUnits="userSpaceOnUse" x="0"
              y="0" width="24" height="24">
            <path d="M0 0H24V24H0V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_188_46)">
            <path
                d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656L6.207 5.408H12.021V6.234H3.9C3.9 6.234 0 5.789 0 11.969C0 18.149 3.403 17.929 3.403 17.929H5.433V15.062C5.433 15.062 5.324 11.642 8.783 11.642H14.549C14.549 11.642 17.789 11.694 17.789 8.494V3.202C17.789 3.202 18.281 0 11.914 0ZM8.708 1.85C9.286 1.85 9.754 2.32 9.754 2.902C9.754 3.483 9.286 3.953 8.708 3.953C8.129 3.953 7.662 3.483 7.662 2.902C7.662 2.32 8.129 1.85 8.708 1.85Z"
                fill="black"/>
            <path
                d="M12.0869 24C18.1789 24 17.7989 21.344 17.7989 21.344L17.7919 18.592H11.9779V17.766H20.1009C20.1009 17.766 24.0009 18.211 24.0009 12.031C24.0009 5.85099 20.5969 6.07099 20.5969 6.07099H18.5669V8.93799C18.5669 8.93799 18.6759 12.358 15.2169 12.358H9.45194C9.45194 12.358 6.21194 12.306 6.21194 15.506V20.798C6.21194 20.798 5.71994 24 12.0869 24ZM15.2929 22.15C14.7139 22.15 14.2469 21.68 14.2469 21.098C14.2469 20.517 14.7139 20.047 15.2929 20.047C15.8709 20.047 16.3389 20.517 16.3389 21.098C16.3389 21.68 15.8709 22.15 15.2929 22.15Z"
                fill={darkMode ? lightColor : "black"}/>
        </g>
    </svg>);
}
export const React = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 10.11C13.03 10.11 13.87 10.95 13.87 12C13.87 13 13.03 13.85 12 13.85C10.97 13.85 10.13 13 10.13 12C10.13 10.95 10.97 10.11 12 10.11ZM7.37 20C8 20.38 9.38 19.8 10.97 18.3C10.45 17.71 9.94 17.07 9.46 16.4C8.65415 16.3229 7.85301 16.2027 7.06 16.04C6.55 18.18 6.74 19.65 7.37 20ZM8.08 14.26L7.79 13.75C7.68 14.04 7.57 14.33 7.5 14.61C7.77 14.67 8.07 14.72 8.38 14.77L8.08 14.26ZM14.62 13.5L15.43 12L14.62 10.5C14.32 9.97 14 9.5 13.71 9.03C13.17 9 12.6 9 12 9C11.4 9 10.83 9 10.29 9.03C10 9.5 9.68 9.97 9.38 10.5L8.57 12L9.38 13.5C9.68 14.03 10 14.5 10.29 14.97C10.83 15 11.4 15 12 15C12.6 15 13.17 15 13.71 14.97C14 14.5 14.32 14.03 14.62 13.5ZM12 6.78C11.81 7 11.61 7.23 11.41 7.5H12.59C12.39 7.23 12.19 7 12 6.78ZM12 17.22C12.19 17 12.39 16.77 12.59 16.5H11.41C11.61 16.77 11.81 17 12 17.22ZM16.62 4C16 3.62 14.62 4.2 13.03 5.7C13.55 6.29 14.06 6.93 14.54 7.6C15.36 7.68 16.17 7.8 16.94 7.96C17.45 5.82 17.26 4.35 16.62 4ZM15.92 9.74L16.21 10.25C16.32 9.96 16.43 9.67 16.5 9.39C16.23 9.33 15.93 9.28 15.62 9.23L15.92 9.74ZM17.37 2.69C18.84 3.53 19 5.74 18.38 8.32C20.92 9.07 22.75 10.31 22.75 12C22.75 13.69 20.92 14.93 18.38 15.68C19 18.26 18.84 20.47 17.37 21.31C15.91 22.15 13.92 21.19 12 19.36C10.08 21.19 8.09 22.15 6.62 21.31C5.16 20.47 5 18.26 5.62 15.68C3.08 14.93 1.25 13.69 1.25 12C1.25 10.31 3.08 9.07 5.62 8.32C5 5.74 5.16 3.53 6.62 2.69C8.09 1.85 10.08 2.81 12 4.64C13.92 2.81 15.91 1.85 17.37 2.69ZM17.08 12C17.42 12.75 17.72 13.5 17.97 14.26C20.07 13.63 21.25 12.73 21.25 12C21.25 11.27 20.07 10.37 17.97 9.74C17.72 10.5 17.42 11.25 17.08 12ZM6.92 12C6.58 11.25 6.28 10.5 6.03 9.74C3.93 10.37 2.75 11.27 2.75 12C2.75 12.73 3.93 13.63 6.03 14.26C6.28 13.5 6.58 12.75 6.92 12ZM15.92 14.26L15.62 14.77C15.93 14.72 16.23 14.67 16.5 14.61C16.43 14.33 16.32 14.04 16.21 13.75L15.92 14.26ZM13.03 18.3C14.62 19.8 16 20.38 16.62 20C17.26 19.65 17.45 18.18 16.94 16.04C16.17 16.2 15.36 16.32 14.54 16.4C14.06 17.07 13.55 17.71 13.03 18.3ZM8.08 9.74L8.38 9.23C8.07 9.28 7.77 9.33 7.5 9.39C7.57 9.67 7.68 9.96 7.79 10.25L8.08 9.74ZM10.97 5.7C9.38 4.2 8 3.62 7.37 4C6.74 4.35 6.55 5.82 7.06 7.96C7.85301 7.79729 8.65415 7.67712 9.46 7.6C9.94 6.93 10.45 6.29 10.97 5.7Z"
                fill={darkMode ? lightColor : "black"}/>
        </svg>
    );
}
export const Java = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.36915 17.51C6.27915 18.37 11.2391 20.15 15.1691 18.51C14.7878 18.3617 14.4198 18.181 14.0691 17.97C12.7047 18.2806 11.2953 18.3416 9.90915 18.15C8.59915 18 9.36915 17.51 9.36915 17.51ZM14.6991 15.83C12.9392 16.2128 11.1279 16.3006 9.33915 16.09C8.02915 15.95 8.88915 15.32 8.88915 15.32C5.48915 16.44 10.7791 17.72 15.5291 16.32C15.2203 16.2185 14.9372 16.0514 14.6991 15.83ZM16.5191 6.10001C16.5191 6.10001 9.64915 7.81001 12.9291 11.59C13.0571 11.7434 13.1525 11.9213 13.2094 12.1128C13.2663 12.3043 13.2836 12.5054 13.2602 12.7038C13.2368 12.9022 13.1732 13.0937 13.0733 13.2667C12.9734 13.4397 12.8393 13.5906 12.6791 13.71C12.6791 13.71 15.1391 12.44 14.0091 10.85C12.8791 9.26001 12.1491 8.63001 16.5191 6.10001Z"
                fill={darkMode ? lightColor : "black"}/>

            <path
                d="M18.1304 19.14C18.1304 19.14 18.6904 19.6 17.5004 19.96C15.2304 20.65 8.07036 20.86 6.08036 19.96C5.36036 19.65 6.70036 19.22 7.08036 19.13C7.30561 19.0719 7.53778 19.0449 7.77036 19.05C6.97036 18.49 2.62036 20.15 5.56036 20.63C13.6104 22 20.2004 20.07 18.1304 19.14ZM15.3704 14.26C15.6644 14.074 15.9719 13.9102 16.2904 13.77C16.2904 13.77 14.7804 14.04 13.2904 14.17C11.6881 14.3246 10.0755 14.3414 8.47036 14.22C6.09036 13.91 9.74036 13 9.74036 13C8.64195 12.9915 7.55779 13.2488 6.58036 13.75C4.52036 14.78 11.6704 15.23 15.3704 14.26ZM16.2804 16.7C16.2585 16.734 16.2315 16.7643 16.2004 16.79C21.2004 15.47 19.3804 12.14 16.9804 12.98C16.848 13.0287 16.7331 13.1157 16.6504 13.23C16.6504 13.23 16.7904 13.18 17.0804 13.11C18.3004 12.86 20.0004 14.74 16.2804 16.7ZM12.0004 13C11.2604 11.33 8.74036 9.86 12.0004 7.29C16.0904 4.08 14.0004 2 14.0004 2C14.8404 5.31 11.0004 6.31 9.66036 8.37C8.73036 9.78 10.1304 11.29 12.0004 13Z"
                fill={darkMode ? lightColor : "black"}/>

            <path
                d="M16.4095 21.32C13.3883 21.8373 10.3052 21.8845 7.26953 21.46C7.26953 21.46 7.72953 21.84 10.1095 21.99C13.7195 22.22 19.2595 21.87 19.3995 20.16C19.3995 20.16 19.1395 20.8 16.4095 21.32Z"
                fill={darkMode ? lightColor : "black"}/>
        </svg>

    );
}
export const Javascript = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    return (<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.75 6.1875C2.75 5.27582 3.11216 4.40148 3.75682 3.75682C4.40148 3.11216 5.27582 2.75 6.1875 2.75H15.8125C16.7242 2.75 17.5985 3.11216 18.2432 3.75682C18.8878 4.40148 19.25 5.27582 19.25 6.1875V15.8125C19.25 16.7242 18.8878 17.5985 18.2432 18.2432C17.5985 18.8878 16.7242 19.25 15.8125 19.25H6.1875C5.27582 19.25 4.40148 18.8878 3.75682 18.2432C3.11216 17.5985 2.75 16.7242 2.75 15.8125V6.1875ZM10.3125 8.25C10.1302 8.25 9.9553 8.32243 9.82636 8.45136C9.69743 8.5803 9.625 8.75516 9.625 8.9375V14.4375C9.625 14.6198 9.55257 14.7947 9.42364 14.9236C9.2947 15.0526 9.11984 15.125 8.9375 15.125H7.5625C7.38016 15.125 7.2053 15.1974 7.07636 15.3264C6.94743 15.4553 6.875 15.6302 6.875 15.8125C6.875 15.9948 6.94743 16.1697 7.07636 16.2986C7.2053 16.4276 7.38016 16.5 7.5625 16.5H8.9375C9.48451 16.5 10.0091 16.2827 10.3959 15.8959C10.7827 15.5091 11 14.9845 11 14.4375V8.9375C11 8.75516 10.9276 8.5803 10.7986 8.45136C10.6697 8.32243 10.4948 8.25 10.3125 8.25ZM11.6875 10.3125V11C11.6875 11.547 11.9048 12.0716 12.2916 12.4584C12.6784 12.8452 13.203 13.0625 13.75 13.0625H14.4375C14.6198 13.0625 14.7947 13.1349 14.9236 13.2639C15.0526 13.3928 15.125 13.5677 15.125 13.75V14.4375C15.125 14.6198 15.0526 14.7947 14.9236 14.9236C14.7947 15.0526 14.6198 15.125 14.4375 15.125H12.375C12.1927 15.125 12.0178 15.1974 11.8889 15.3264C11.7599 15.4553 11.6875 15.6302 11.6875 15.8125C11.6875 15.9948 11.7599 16.1697 11.8889 16.2986C12.0178 16.4276 12.1927 16.5 12.375 16.5H14.4375C14.9845 16.5 15.5091 16.2827 15.8959 15.8959C16.2827 15.5091 16.5 14.9845 16.5 14.4375V13.75C16.5 13.203 16.2827 12.6784 15.8959 12.2916C15.5091 11.9048 14.9845 11.6875 14.4375 11.6875H13.75C13.5677 11.6875 13.3928 11.6151 13.2639 11.4861C13.1349 11.3572 13.0625 11.1823 13.0625 11V10.3125C13.0625 10.1302 13.1349 9.9553 13.2639 9.82636C13.3928 9.69743 13.5677 9.625 13.75 9.625H15.8125C15.9948 9.625 16.1697 9.55257 16.2986 9.42364C16.4276 9.2947 16.5 9.11984 16.5 8.9375C16.5 8.75516 16.4276 8.5803 16.2986 8.45136C16.1697 8.32243 15.9948 8.25 15.8125 8.25H13.75C13.203 8.25 12.6784 8.4673 12.2916 8.85409C11.9048 9.24089 11.6875 9.76549 11.6875 10.3125Z"
                fill={darkMode ? lightColor : "black"}/>

        </svg>

    );
}
export const Flutter = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.9 15.375L2.5 12L13.5 1H20.275L5.9 15.375ZM13.5 23L7.575 17.075L13.5 11.15H20.275L14.35 17.075L20.275 23H13.5Z"
                fill={darkMode ? lightColor : "black"}/>

        </svg>

    );
}
export const OpenAi = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.5624 10.188C20.8124 9.5 20.8754 8.812 20.8124 8.125C20.7504 7.437 20.5004 6.75 20.1874 6.125C19.6254 5.187 18.8124 4.437 17.8754 4C16.8754 3.562 15.8124 3.437 14.7504 3.687C14.2504 3.187 13.6874 2.75 13.0624 2.437C12.4374 2.126 11.6874 2 11.0004 2C9.92724 1.99373 8.87877 2.32155 8.00036 2.938C7.12536 3.562 6.50036 4.438 6.18736 5.438C5.43736 5.625 4.81236 5.938 4.18736 6.313C3.62536 6.75 3.18736 7.313 2.81236 7.875C2.25036 8.813 2.06236 9.875 2.18736 10.938C2.31295 11.9979 2.74768 12.9974 3.43736 13.812C3.20097 14.4724 3.11555 15.1773 3.18736 15.875C3.25036 16.563 3.50036 17.25 3.81236 17.875C4.37536 18.813 5.18736 19.563 6.12536 20C7.12536 20.438 8.18736 20.563 9.25036 20.313C9.75036 20.813 10.3124 21.25 10.9374 21.563C11.5624 21.875 12.3124 22 13.0004 22C14.0735 22.0063 15.1219 21.6784 16.0004 21.062C16.8754 20.437 17.5004 19.562 17.8124 18.562C18.5185 18.4277 19.1827 18.1279 19.7504 17.687C20.3124 17.25 20.8124 16.75 21.1254 16.125C21.6874 15.187 21.8754 14.125 21.7504 13.062C21.6254 12 21.2504 11 20.5624 10.188ZM13.0624 20.688C12.0624 20.688 11.3124 20.375 10.6254 19.813C10.6254 19.813 10.6874 19.75 10.7504 19.75L14.7504 17.437C14.862 17.3878 14.9512 17.2986 15.0004 17.187C15.0624 17.062 15.0624 17 15.0624 16.875V11.25L16.7504 12.25V16.875C16.7676 17.3698 16.6849 17.8631 16.5072 18.3252C16.3295 18.7874 16.0606 19.209 15.7163 19.5649C15.3721 19.9208 14.9597 20.2037 14.5037 20.3966C14.0477 20.5896 13.5575 20.6887 13.0624 20.688ZM5.00036 17.25C4.56236 16.5 4.37536 15.625 4.56236 14.75C4.56236 14.75 4.62536 14.813 4.68736 14.813L8.68736 17.125C8.78343 17.1758 8.89213 17.1976 9.00036 17.188C9.12536 17.188 9.25036 17.188 9.31236 17.125L14.1874 14.312V16.25L10.1254 18.625C9.27444 19.1179 8.26267 19.2527 7.31236 19C6.31236 18.75 5.50036 18.125 5.00036 17.25ZM3.93736 8.562C4.37948 7.81568 5.06321 7.24273 5.87536 6.938V11.688C5.87536 11.812 5.87536 11.938 5.93736 12C5.98651 12.1116 6.07571 12.2008 6.18736 12.25L11.0624 15.063L9.37536 16.063L5.37536 13.75C4.94928 13.5094 4.5752 13.1867 4.27479 12.8004C3.97439 12.4142 3.75365 11.9722 3.62536 11.5C3.37536 10.562 3.43736 9.437 3.93736 8.562ZM17.7504 11.75L12.8754 8.937L14.5624 7.937L18.5624 10.25C19.1874 10.625 19.6874 11.125 20.0004 11.75C20.3124 12.375 20.5004 13.063 20.4374 13.813C20.3765 14.5168 20.1163 15.1887 19.6874 15.75C19.2504 16.313 18.6874 16.75 18.0004 17V12.25C18.0004 12.125 18.0004 12 17.9374 11.937C17.9374 11.937 17.8754 11.813 17.7504 11.75ZM19.4374 9.25C19.4374 9.25 19.3754 9.187 19.3124 9.187L15.3124 6.875C15.1874 6.812 15.1254 6.812 15.0004 6.812C14.8754 6.812 14.7504 6.812 14.6874 6.875L9.81236 9.688V7.75L13.8754 5.375C14.5004 5 15.1874 4.875 15.9374 4.875C16.6254 4.875 17.3124 5.125 17.9374 5.563C18.5004 6 19.0004 6.563 19.2504 7.188C19.5004 7.813 19.5624 8.563 19.4374 9.25ZM8.93736 12.75L7.25036 11.75V7.062C7.25036 6.375 7.43736 5.625 7.81236 5.062C8.18736 4.438 8.75036 4 9.37536 3.688C10.0123 3.36826 10.7343 3.25901 11.4374 3.376C12.1254 3.439 12.8124 3.751 13.3754 4.189C13.3754 4.189 13.3124 4.251 13.2504 4.251L9.25036 6.564C9.13871 6.61315 9.04951 6.70234 9.00036 6.814C8.93736 6.939 8.93736 7.001 8.93736 7.126V12.751V12.75ZM9.81236 10.75L12.0004 9.5L14.1874 10.75V13.25L12.0004 14.5L9.81236 13.25V10.75Z"
                fill={darkMode ? lightColor : "black"}/>

        </svg>


    );
}
export const Close = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3002 5.71C18.2077
                                5.6173 18.0978 5.54375 17.9768 5.49357C17.8559 5.44339
                                17.7262 5.41756 17.5952 5.41756C17.4643 5.41756 17.3346 5.44339 17.2136 5.49357C17.0926 5.54375 16.9827 5.6173 16.8902 5.71L12.0002 10.59L7.11022 5.7C7.01764 5.60742 6.90773 5.53398 6.78677 5.48388C6.6658 5.43377 6.53615 5.40798 6.40522 5.40798C6.27429 5.40798 6.14464 5.43377 6.02368 5.48388C5.90272 5.53398 5.79281 5.60742 5.70022 5.7C5.60764 5.79258 5.5342 5.90249 5.4841 6.02346C5.43399 6.14442 5.4082 6.27407 5.4082 6.405C5.4082 6.53593 5.43399 6.66558 5.4841 6.78655C5.5342 6.90751 5.60764 7.01742 5.70022 7.11L10.5902 12L5.70022 16.89C5.60764 16.9826 5.5342 17.0925 5.4841 17.2135C5.43399 17.3344 5.4082 17.4641 5.4082 17.595C5.4082 17.7259 5.43399 17.8556 5.4841 17.9765C5.5342 18.0975 5.60764 18.2074 5.70022 18.3C5.79281 18.3926 5.90272 18.466 6.02368 18.5161C6.14464 18.5662 6.27429 18.592 6.40522 18.592C6.53615 18.592 6.6658 18.5662 6.78677 18.5161C6.90773 18.466 7.01764 18.3926 7.11022 18.3L12.0002 13.41L16.8902 18.3C16.9828 18.3926 17.0927 18.466 17.2137 18.5161C17.3346 18.5662 17.4643 18.592 17.5952 18.592C17.7262 18.592 17.8558 18.5662 17.9768 18.5161C18.0977 18.466 18.2076 18.3926 18.3002 18.3C18.3928 18.2074 18.4662 18.0975 18.5163 17.9765C18.5665 17.8556 18.5922 17.7259 18.5922 17.595C18.5922 17.4641 18.5665 17.3344 18.5163 17.2135C18.4662 17.0925 18.3928 16.9826 18.3002 16.89L13.4102 12L18.3002 7.11C18.6802 6.73 18.6802 6.09 18.3002 5.71Z"
                  fill={darkMode ? lightColor : "black"}/>

        </svg>


    );
}

import type { FC } from "react"
import type { BaseIconProps } from "./IconProps.interface"

export const TwitterIcon: FC<BaseIconProps> = ({ className, style }) => {
  return  (
    <svg className={className} style={style} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Twitter icon</title>
      <path d="M30.8571 6.79643C29.7643 7.26786 28.575 7.60714 27.35 7.73929C28.6218 6.9837 29.5742 5.79 30.0286 4.38214C28.8351 5.0921 27.5277 5.58994 26.1643 5.85357C25.5944 5.24438 24.9053 4.75907 24.1396 4.42788C23.374 4.0967 22.5484 3.92673 21.7143 3.92857C18.3393 3.92857 15.625 6.66429 15.625 10.0214C15.625 10.4929 15.6821 10.9643 15.775 11.4179C10.7214 11.1536 6.21428 8.73929 3.21785 5.04286C2.67187 5.97541 2.38576 7.03724 2.38928 8.11786C2.38928 10.2321 3.46428 12.0964 5.10357 13.1929C4.13751 13.1548 3.19408 12.8893 2.35 12.4179V12.4929C2.35 15.4536 4.44285 17.9071 7.23214 18.4714C6.70842 18.6075 6.16966 18.6771 5.62857 18.6786C5.23214 18.6786 4.85714 18.6393 4.47857 18.5857C5.25 21 7.49643 22.7536 10.1714 22.8107C8.07857 24.45 5.45714 25.4143 2.61071 25.4143C2.1 25.4143 1.62857 25.3964 1.13928 25.3393C3.83928 27.0714 7.04285 28.0714 10.4929 28.0714C21.6929 28.0714 27.8214 18.7929 27.8214 10.7393C27.8214 10.475 27.8214 10.2107 27.8036 9.94643C28.9893 9.07857 30.0286 8.00357 30.8571 6.79643Z" fill="currentColor"/>
    </svg>
  )
}
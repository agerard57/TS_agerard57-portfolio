/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = { onClick(): void };

export const EnglishFlag: FC<Props> = ({ onClick }) => (
  <div
    onClick={onClick}
    css={css`
      grid-area: enflag;
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={335.45}
      viewBox="0 0 512 335.45001"
    >
      <path
        d="M473.655.001H38.345C17.167.001 0 17.168 0 38.346v258.759c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V38.346C512 17.168 494.833.001 473.655.001z"
        fill="#41479b"
      />
      <path
        d="M511.469 32.007C508.447 13.848 492.672 0 473.655 0h-9.977l-163.54 107.147V.001h-88.276v107.147L48.322.001h-9.977C19.328.001 3.553 13.848.531 32.008l139.778 91.58H0v88.276h140.309L.531 303.442c3.022 18.159 18.797 32.007 37.814 32.007h9.977l163.54-107.147v107.147h88.276V228.302l163.54 107.147h9.977c19.017 0 34.792-13.847 37.814-32.007l-139.778-91.58H512v-88.276H371.691z"
        fill="#f5f5f5"
      />
      <g fill="#ff4b55">
        <path d="M229.517 141.242H0v52.966h229.517v141.241h52.966V194.208H512v-52.966H282.483V.001h-52.966z" />
        <path d="M24.793 332.977l186.583-121.114h-32.428L9.224 322.035a38.393 38.393 0 0015.569 10.942zM346.388 211.863H313.96l180.716 117.305a38.515 38.515 0 0012.287-13.075zM4.049 21.2l157.73 102.387h32.428L15.475 7.567A38.499 38.499 0 004.049 21.2zM332.566 123.587L502.601 13.212a38.4 38.4 0 00-15.699-10.86L300.138 123.587z" />
      </g>
    </svg>
  </div>
);
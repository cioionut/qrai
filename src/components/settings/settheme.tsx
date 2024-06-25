"use client"

import { cva } from "class-variance-authority";
import { useTheme } from "next-themes";

// local
import useHasMounted from "../core/hasmountedhook";
import { uiThemes } from "@/lib/commons/constants";


const btnGrpStyle = cva(["btn", "btn-outline", "me-2"], {
  variants: {
    active: {
      true: 'btn-active',
      false: ''
    }
  },
  defaultVariants: {
    active: false
  }
},
);


const SetTheme = () => {
  const { theme, setTheme } = useTheme();
  // console.log(`Current theme: ${theme}`);

  // on SSR render nothing, and render only client side rendering (CSR)
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  // for jsx vars
  const selectDispStr = 'Change theme';
  const options = uiThemes.map((themeElem, index) =>
    <button key={index} className={btnGrpStyle({ active: theme === themeElem })} onClick={() => setTheme(themeElem)}>{themeElem.toUpperCase()}</button>
  )

  return (
    <>
      <p className="py-2">{selectDispStr}</p>
      <div className="btn-group">
        {options}
      </div>
    </>
  );
};

export default SetTheme;
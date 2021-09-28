import Color from "color";

const baseTheme = {
  $primary: "#796A8E",
  $warning: "",
  $danger: "",
  $mono: "",
  $gray: "#E0E1E3",
  $black: "",
  $white: "",
  $spacingBig: "",
  $spacing: "",
  $roundness: "",
};

const expandTheme = (t) => {
  t["$primary05"] = Color(t["$primary"]).lighten(0.95).toString();
  t["$mono90"] = Color(t["$primary"]).darken(0.4).toString();
  t["$mono10"] = Color(t["$primary"]).lighten(0.4).toString();
  t["$gray10"] = Color(t["$gray"]).lightness(90).toString();
  t["$shadow"] = `5px 5px ${t["$gray10"]}`;

  return t;
};

export default expandTheme(baseTheme);

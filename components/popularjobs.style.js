import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    borderColor: 'red',
    borderWidth: 2,
    padding: SIZES.medium
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    borderColor: 'green',
    borderWidth: 2,
    marginTop: SIZES.medium,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

  },
});

export default styles;

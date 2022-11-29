import { Search as IconSearch } from "@mui/icons-material";
import { TextField } from "@mui/material";
import styles from "./style.module.scss";

export const Search = (props) => {
  return (
    <TextField
      type="search"
      placeholder="Tìm kiếm"
      className={styles.Search}
      onChange={(e) => e.target.value}
      InputProps={{
        startAdornment: <IconSearch />,
        classes: { root: styles.InputRoot, input: styles.Input },
      }}
    />
  );
};

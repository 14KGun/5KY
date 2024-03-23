import { DropdownMenu, DropdownItem, Dropdown } from "semantic-ui-react";

const DropDown = () => {
  <Dropdown text="성별">
    <DropdownMenu>
      <DropdownItem text="남성" />
      <DropdownItem text="여성" />
      <DropdownItem text="알리고 싶지 않음" />
    </DropdownMenu>
  </Dropdown>;
};

export default DropDown;

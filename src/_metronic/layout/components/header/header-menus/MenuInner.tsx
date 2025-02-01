import { useIntl } from "react-intl";
import { MenuItem } from "./MenuItem";
import { MenuInnerWithSub } from "./MenuInnerWithSub";
import { MegaMenu } from "./MegaMenu";
import { MegaMenuELearning } from "./MegaMenuELearning";

export function MenuInner() {
  const intl = useIntl();
  return (
    <>
      <MenuItem title="Home" to="/" />
      <MenuItem title="Jobs" to="/jobs" />
      <MenuItem title="Employers" to="/employers" />
      <MenuItem title="CV-Bank" to="/cv-bank" />

      <MenuInnerWithSub
        isMega={true}
        title="E-Learning"
        to="/mega-menu"
        menuPlacement="bottom-start"
        menuTrigger="{default:'click', lg: 'hover'}"
        hasArrow={true}
      >
        <MegaMenuELearning />
      </MenuInnerWithSub>

      <MenuInnerWithSub
        title="Career Resources"
        to="/crafted"
        menuPlacement="bottom-start"
        menuTrigger="{default:'click', lg: 'hover'}"
        hasArrow={true}
      >
        <MenuItem
          hasBullet={true}
          to="resources/career"
          title="Career Guidance"
        />
        <MenuItem
          hasBullet={true}
          to="resources/interview-tips"
          title="Interview Tips"
        />
        <MenuItem
          hasBullet={true}
          to="resources/resume"
          title="Resume Writing Tips"
        />
        <MenuItem
          hasBullet={true}
          to="resources/cover-letter"
          title="Cover Letter"
        />
        <MenuItem
          hasBullet={true}
          to="resources/salary-guide"
          title="Salary Guide"
        />
        <MenuItem
          hasBullet={true}
          to="resources/assessment"
          title="Education Assessment"
        />
      </MenuInnerWithSub>
    </>
  );
}

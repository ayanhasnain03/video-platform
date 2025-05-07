import { Button } from "@/components/ui/button";
import { NAV_LINKS_SUB } from "@/components/layout/navbar/NAV_LINKS";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const NavSubItem = () => {
  return (
    <>
      {NAV_LINKS_SUB.map((elem) => {
        const Icon = elem.icon;

        return (
          <ul key={elem.url} className="">
            <li>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Icon size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  {elem.label}
                </TooltipContent>
              </Tooltip>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default NavSubItem;

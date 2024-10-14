import React from "react";
import { IconTextRow } from "./IconTextRow";
import {
  CircleStackIcon,
  UserIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  FolderIcon,
  EyeSlashIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

interface ColumnProps {
  plan: "free" | "unlimited" | "plus";
}

interface IconSymbol {
  icon: React.ElementType;
  text: string;
}

interface RowsProps {
  free: IconSymbol[];
  plus: IconSymbol[];
  unlimited: IconSymbol[];
}

export const ColumnComponent: React.FC<ColumnProps> = ({ plan }) => {
  const rows: RowsProps = {
    free: [
      { icon: CircleStackIcon, text: "1 GB storage" },
      { icon: UserIcon, text: "1 user" },
      { icon: EnvelopeIcon, text: "10 extra email addresses for you" },
    ],
    plus: [
      { icon: CircleStackIcon, text: "1 GB storage" },
      { icon: UserIcon, text: "1 user" },
      { icon: EnvelopeIcon, text: "10 extra email addresses for you" },
      { icon: GlobeAltIcon, text: "Support for 1 custom email domain" },
      { icon: FolderIcon, text: "Unlimited folders and labels" },
    ],
    unlimited: [
      { icon: CircleStackIcon, text: "1 GB storage" },
      { icon: UserIcon, text: "1 user" },
      { icon: EnvelopeIcon, text: "10 extra email addresses for you" },
      { icon: GlobeAltIcon, text: "Support for 1 custom email domain" },
      { icon: FolderIcon, text: "Unlimited folders and labels" },
      { icon: EyeSlashIcon, text: "Unlimited hide-my-email aliases" },
      { icon: LifebuoyIcon, text: "Dedicated customer support" },
    ],
  };

  return (
    <div className='w-full flex flex-col p-4 rounded-md'>
      {rows[plan].map((row: IconSymbol, index: number) => (
        <IconTextRow key={index} Icon={row.icon} text={row.text} />
      ))}
    </div>
  );
};

import React from "react";
import * as AllIcons from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
type AllKeys = keyof (typeof AllIcons);
type PickCapitalizeAsComp<K extends AllKeys> = K extends Capitalize<K> ? K : never;

const Icon = ({ type, ...props }: IconComponentProps) => {
  const iconNames: any[] = Object.keys(AllIcons);
  if (!iconNames.includes(type)) {
    if (props.component) {
      return React.createElement(props.component);
    }
    // 这个是记录哪个写错了
    console.log(type);
    return React.createElement("div");
  }
  const iconType = type as unknown as PickCapitalizeAsComp<AllKeys>;
  const Comp = AllIcons[iconType] as React.ClassType<any, any, any>;
  return <Comp {...props} />;
};
export default Icon;

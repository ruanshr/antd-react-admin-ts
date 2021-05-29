import React from "react";
import * as AllIcons from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";

type PickProps<T> = T extends (props: infer P1) => any
  ? P1
  : T extends React.ComponentClass<infer P2>
  ? P2
  : unknown;

type AllKeys = keyof typeof AllIcons;
//  获取大写开头的导出们, 认为是组件
type PickCapitalizeAsComp<K extends AllKeys> = K extends Capitalize<K> ? K : never;
// ------------------------------------------------^ typescript 4.1+ --------
type IconNames = PickCapitalizeAsComp<AllKeys>;
// 没有 4.1 的可以手动排除 小写开头的方法们
// type IconNames = Exclude<
//   AllKeys,
//   "createFromIconfontCN" | "default" | "getTwoToneColor" | "setTwoToneColor"
// >;

export type PickIconPropsOf<K extends IconNames> = PickProps<typeof AllIcons[K]>;

// 这里将不再能用 FC 来包裹
// const Icon = <T extends IconNames, P extends Object = PickIconPropsOf<T>>({
//   type,
//   ...props
// }: { type: T, className?: string, onClick?: Function, style?: any } & P) => {
//   const iconNames: any[] = Object.keys(AllIcons);
//   if (!iconNames.includes(type)) {
//     return React.createElement("div");
//   }
//   const Comp = AllIcons[type] as  React.ClassType<any, any, any>;
//   return <Comp {...props} />;
// };

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

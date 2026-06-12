import { ReactNode } from "react";

type Color = 'green' | 'red' | 'purple';
type Shape = 'diamond' | 'squiggle' | 'stadium';
type Fill = 'blank' | 'filled' | 'shaded';
type Number = 1 | 2 | 3;
type Status = 'active' | 'default' | 'accepted' | 'rejected' | 'backface';

export enum CardColors {
    Green = 'green',
    Red = 'red',
    Purple = 'purple'
}

export enum CardShapes {
    Diamond = 'diamond',
    Squiggle = 'squiggle',
    Stadium = 'stadium',
}


export enum CardFills {
    Blank = 'blank',
    Shaded = 'shaded',
    Filled = 'filled'
}

type FeatureNames = 'color' | 'shape' | 'fill' | 'number';

type Features = {
    color: Array<Color>,
    shape: Array<Shape>,
    fill: Array<Fill>,
    number: Array<Number>
}

type ICard = {
    id: string;
    status?: Status;
    children?: ReactNode;
    handleClick?: (e: any) => void;
    className?: string
}

export type { Color, Shape, Features, FeatureNames, Fill, Number, Status, ICard };

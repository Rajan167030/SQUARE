"use client"

import * as React from "react"
import {
  Bar,
  BarChart,
  type BarProps,
  type ChartConfig,
  ChartContainer,
  ChartLegendContent as RechartsChartLegendContent,
  ChartTooltipContent as RechartsChartTooltipContent,
  Label,
  Line,
  LineChart,
  type LineProps,
  type ReferenceLineProps,
  XAxis,
  ResponsiveContainer,
  ComposedChart,
} from "recharts"

import { cn } from "@/lib/utils"

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <Chart />")
  }

  return context
}

type ChartContextProps = {
  config: ChartConfig
}

type ChartProps = React.ComponentProps<typeof ChartContainer> & {
  config: ChartConfig
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({ config, className, children, ...props }, ref) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <ChartContainer ref={ref} className={cn("h-full w-full", className)} config={config} {...props}>
        {children}
      </ChartContainer>
    </ChartContext.Provider>
  )
})
Chart.displayName = "Chart"

const CustomChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsChartTooltipContent>
>(({ children, ...props }, ref) => {
  const { config } = useChart()
  return (
    <RechartsChartTooltipContent
      ref={ref}
      hideLabel
      formatter={(value, name) => {
        const formattedValue = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value as number)
        return (
          <span className="flex items-center text-muted-foreground">
            {config[name as keyof typeof config]?.icon &&
              (
                \
              <config[name as keyof typeof config]["icon\"] className=\"mr-1.5 h-3 w-3" />
              )}
            {formattedValue}
          </span>
        )
      }}
      className="grid min-w-[130px] text-xs"
      {...props}
    >
      {children}
    </RechartsChartTooltipContent>
  )
})

const CustomChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsChartLegendContent>
>(({ children, ...props }, ref) => {
  const { config } = useChart()
  return (
    <RechartsChartLegendContent
      ref={ref}
      formatter={(value) => {
        return (
          <div className="flex items-center">
            {config[value as keyof typeof config]?.icon &&
              (
                \
              <config[value as keyof typeof config]["icon\"] className=\"mr-1.5 h-3 w-3" />
              )}
            <span>{value}</span>
          </div>
        )
      }}
      {...props}
    >
      {children}
    </RechartsChartLegendContent>
  )
})

const ChartPrimitive = React.forwardRef<
  React.ElementRef<typeof ResponsiveContainer>,
  {
    type?: "line" | "bar"
    data: unknown[]
    margin?: React.ComponentProps<typeof ComposedChart>["margin"]
    config: ChartConfig
    children?: React.ReactNode
  }
>(({ type, data, margin, config, children }, ref) => {
  const ChartComponent = type === "line" ? LineChart : BarChart
  return (
    <ResponsiveContainer>
      <ChartComponent data={data} margin={margin}>
        {children}
      </ChartComponent>
    </ResponsiveContainer>
  )
})

const ChartAxis = React.forwardRef<React.ElementRef<typeof XAxis>, React.ComponentProps<typeof XAxis>>(
  ({ className, ...props }, ref) => (
    <XAxis
      ref={ref}
      className={cn("fill-foreground", className)}
      stroke="hsl(var(--chart-axis))"
      tickLine={false}
      axisLine={false}
      {...props}
    />
  ),
)

const ChartCrosshair = React.forwardRef<React.ElementRef<typeof ComposedChart>, ReferenceLineProps>(
  ({ className, ...props }, ref) => (
    <ComposedChart
      ref={ref}
      stroke="hsl(var(--chart-crosshair))"
      strokeDasharray="4 4"
      className={cn("stroke-2", className)}
      {...props}
    />
  ),
)

const ChartLabel = React.forwardRef<React.ElementRef<typeof Label>, React.ComponentProps<typeof Label>>(
  ({ className, ...props }, ref) => <Label ref={ref} className={cn("fill-foreground", className)} {...props} />,
)

const ChartLine = React.forwardRef<React.ElementRef<typeof Line>, LineProps>(({ className, ...props }, ref) => {
  const { config } = useChart()
  return (
    <Line ref={ref} dot={false} stroke="hsl(var(--chart-line))" strokeWidth={2} className={cn(className)} {...props} />
  )
})

const ChartBar = React.forwardRef<React.ElementRef<typeof Bar>, BarProps>(({ className, ...props }, ref) => {
  const { config } = useChart()
  return <Bar ref={ref} fill="hsl(var(--chart-bar))" className={cn(className)} {...props} />
})

export {
  Chart,
  CustomChartTooltipContent,
  CustomChartLegendContent,
  ChartAxis,
  ChartCrosshair,
  ChartLabel,
  ChartLine,
  ChartBar,
}

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  interface TableProps {
      headers: string[],
      data: []
  }
  
  export function TableUI({ headers, data} : TableProps) {
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
              {
                headers.map((val, index) => (
                    <TableHead key={index} className="w-[100px]">{val}</TableHead>        
                ))
              }
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((score: any, index) => (
            <TableRow key={score.id}>
                <TableCell className="font-medium">{++index}</TableCell>
                <TableCell className="font-medium">{score?.user.email}</TableCell>
                <TableCell className="font-medium">{score.wpm}</TableCell>
                <TableCell className="font-medium">{score.accuracy}%</TableCell>
                <TableCell className="font-medium">{score.played_at}</TableCell>
                <TableCell className="font-medium">{score.duration}</TableCell>
                <TableCell className="font-medium">{score.completed ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
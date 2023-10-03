interface NutritionRowProps {
  nutrient: string;
  amount: any;
  dailyValue?: number;
  subrow?: boolean;
  indented?: boolean;
}

const NutritionRow: React.FC<NutritionRowProps> = ({
  nutrient,
  amount,
  dailyValue,
  subrow,
  indented
}) => {
  return (
    <div className="flex justify-between">
      <h2>
        <span
          className={`${!subrow && "font-extrabold"} ${indented && "ml-4"} mr-2`}
        >
          {nutrient}
        </span>
        {amount}
      </h2>
      {dailyValue !== undefined && <h2 className="font-extrabold">{dailyValue}%</h2>}
    </div>
  );
};

export default NutritionRow;

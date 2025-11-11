interface Title {
  state: boolean;
  subTitle: string;
  space: boolean;
  title?: string
  stateTitle?: boolean;
  
}

const CustomTitle: React.FC<Title> = ({ state, subTitle, space, title, stateTitle }) => {
  return (
   <>
       <div className={`flex items-center  gap-3 w-fit ${space ? "mb-7" : "!mb-5 m-auto"}`}>

      <span className="block w-8 h-0.5 bg-[#D4A574]" />
      <h3 className="text-[#D4A574] uppercase text-sm font-semibold leading-5 tracking-wider">
        {subTitle}
      </h3>
      {!state && <span className="block w-8 h-0.5 bg-[#D4A574]" />}
    </div>
      <h4 className={`text-4xl ${!stateTitle ? "text-center" : ""} text-(--Secondary-txt) font-bold leading-10 mb-14`}>{title}</h4>
   </>
  );
};

export default CustomTitle;

export const parseArgs = (args: string[], cliFlags: string[], returnAsMap: boolean = false): 
    IFlags[]|Map<string, string> => {

    const result: IFlags[] = [];

   const flags = ["--new", "--type", "--help"];
   
   args.forEach((arg, idx) => {
       if (flags.includes(arg)) {
            result.push({
            flag: arg,
            value: args[idx + 1].toString()
        });           
       }
   });

   
   return (!returnAsMap) ? result : new Map(result.map((item) => [item.flag, item.value]));

};


interface IFlags {
    flag: string;
    value: string;
}
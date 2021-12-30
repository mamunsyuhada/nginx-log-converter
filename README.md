# mytools-CLI

A CLI tool for exporting Nginx error log to *.txt or *.json format.

## Installation

Clone the repository:

```
git clone https://github.com/mamunsyuhada/nginx-log-converter.git
```

Install the dependencies:
```
npm i
```

Install the package globally on your machine:
```
npm i -g .
```

## Usage

1. Exporting to *.json:

```bash
mytools /var/log/nginx/error.log -t json
```

2. To *txt (default):

```bash
mytools /var/log/nginx/error.log -t text
```

```bash
mytools /var/log/nginx/error.log
```

If the task text has spaces either put quotations around it or escape the spaces. If it doesn't, quotations are not necessary. Where `-t, --target` can take at least one value. Values are separated by spaces.

3. You can add ```-o, --output``` flag

```bash
mytools /var/log/nginx/error.log -t json -o /User/johnmayer/Desktop/nginxlog.json
```

```bash
mytools /var/log/nginx/error.log -t json -o /User/johnmayer/Desktop/nginxlog.txt
```

The user can also choose where to put the file

4. Flag -h which serves to display instructions
its use.

Output :

```bash
  Usage:
    mytools <target-file>
    mytools <path error.log> -t <format output>
    mytools <path error.log> -o <path output>
    mytools <path error.log> -t <format output> -o <path output>

  Example:
    mytools /var/log/nginx/error.log
    mytools /var/log/nginx/error.log -t text
    mytools /var/log/nginx/error.log -t json
    mytools /var/log/nginx/error.log -o /User/johnmayer/Desktop/nginxlog.txt
    mytools /var/log/nginx/error.log -t json -o /User/johnmayer/Desktop/nginxlog.json
  
  Help:
    mytools -h or mytools --help
```
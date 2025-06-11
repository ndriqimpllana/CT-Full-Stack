{\rtf1\ansi\ansicpg1252\cocoartf2856
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red234\green236\blue255;\red27\green30\blue38;}
{\*\expandedcolortbl;;\cssrgb\c93333\c94118\c100000;\cssrgb\c14118\c15686\c19608\c50196;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
pushd "%CD%"\
for /d %%d in (*) do (\
    if not "%%d" == "." (\
        :: Create a new directory with the same name as the subfolder\
        mkdir "..\\%%d"\
        :: Move the content of the subfolder to the new directory\
        move "%%d\\*" "..\\%%d\\"\
    )\
)\
popd}